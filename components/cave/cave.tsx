'use client';

import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { motion } from 'framer-motion';

import { useCaveMode } from './context';
import Torch from './torch';
import Wall from './wall';

interface PointerPosition {
    x: number;
    y: number;
}

export default function Cave() {
    const { exitCave } = useCaveMode();

    const [position, setPosition] = useState<PointerPosition>({
        x: 0,
        y: 0,
    });

    const [isReady, setIsReady] = useState(false);

    const animationFrame = useRef<number | null>(null);
    const pendingPosition = useRef<PointerPosition>({
        x: 0,
        y: 0,
    });

    const updatePosition = useCallback((x: number, y: number) => {
        pendingPosition.current = { x, y };

        if (animationFrame.current !== null) {
            return;
        }

        animationFrame.current = requestAnimationFrame(() => {
            setPosition(pendingPosition.current);
            animationFrame.current = null;
        });
    }, []);

    useEffect(() => {
        const initialX = window.innerWidth / 2;
        const initialY = window.innerHeight / 2;

        setPosition({
            x: initialX,
            y: initialY,
        });

        pendingPosition.current = {
            x: initialX,
            y: initialY,
        };

        const readyTimer = window.setTimeout(() => {
            setIsReady(true);
        }, 1250);

        const handlePointerMove = (event: PointerEvent) => {
            updatePosition(event.clientX, event.clientY);
        };

        window.addEventListener('pointermove', handlePointerMove);

        return () => {
            window.clearTimeout(readyTimer);
            window.removeEventListener(
                'pointermove',
                handlePointerMove,
            );

            if (animationFrame.current !== null) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, [updatePosition]);

    const flameX = position.x + 5;
    const flameY = position.y - 54;

    return (
        <motion.main
            className="cave-mode-root"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            }}
            onPointerMove={(event) => {
                updatePosition(event.clientX, event.clientY);
            }}
        >
            <Wall lightX={flameX} lightY={flameY} />

            <div
                className="cave-darkness"
                style={
                    {
                        '--cave-light-x': `${flameX}px`,
                        '--cave-light-y': `${flameY}px`,
                    } as React.CSSProperties
                }
                aria-hidden="true"
            />

            {isReady && <Torch x={position.x} y={position.y} />}

            <button
                type="button"
                onClick={exitCave}
                className="cave-exit"
            >
                Leave cave
            </button>

            <p className="cave-guidance">
                Move the flame to reveal the wall
            </p>
        </motion.main>
    );
}