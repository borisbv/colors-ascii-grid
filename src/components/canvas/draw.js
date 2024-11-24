import React, { } from 'react';
import { Stage, Layer, Rect } from 'react-konva';


function CanvasDraw({ text, calculateRGB, gridWidth, gridSize, stageRef }) {

    // Función para calcular el color RGB basado en los caracteres
    // const calculateRGB = (charPrev, char, charNext) => {
    //     const r = charPrev ? charPrev.charCodeAt(0) % 256 : 0;
    //     const g = char ? char.charCodeAt(0) % 256 : 0;
    //     const b = charNext ? charNext.charCodeAt(0) % 256 : 0;
    //     return `rgb(${r},${g},${b})`;
    // };

    // Generar la cuadrícula como una lista de celdas con posición y color
    const generateGrid = () => {
        const grid = [];
        const totalChars = text.length;

        for (let i = 0; i < totalChars; i++) {
            const row = Math.floor(i / gridWidth); // Determinar la fila
            const col = i % gridWidth; // Determinar la columna
            const charPrev = i > 0 ? text[i - 1] : text[totalChars - 1];
            const char = text[i];
            const charNext = i < totalChars - 1 ? text[i + 1] : text[0];

            grid.push({
                id: i,
                x: col * gridSize,
                y: row * gridSize,
                color: calculateRGB(charPrev, char, charNext),
            });
        }

        return grid;
    };

    const grid = generateGrid();

    return (
        <>
            <Stage 
                width={gridWidth * gridSize}
                height={Math.ceil(text.length / gridWidth) * gridSize}
                ref={stageRef}
            >
                <Layer>
                    {grid.map((cell) => (
                    <Rect
                        key={cell.id}
                        x={cell.x}
                        y={cell.y}
                        width={gridSize}
                        height={gridSize}
                        fill={cell.color}
                        // stroke="black" // Opcional: bordes para cada celda
                        strokeWidth={0.5}
                    />
                    ))}
                </Layer>
            </Stage>
        </>
    );
}

export default CanvasDraw;