import React, { useState, useRef } from 'react';
import { Box, Button, Typography, Slider } from '@mui/material';
import CanvasDraw from './draw';


function Canvas({ text, calculateRGB }) {
    const stageRef = useRef(null); // Referencia al Stage de Konva
    
    const downloadImage = () => {
        if (!stageRef.current) return;
    
        // Configurar resolución para alta calidad
        const pixelRatio = 10; // Ajusta este valor para mayor resolución (4x aquí)
        const dataURL = stageRef.current.toDataURL({ quality: 1, pixelRatio, mimeType: "image/png" });
    
        // Crear un enlace para descargar la imagen
        const link = document.createElement('a');
        link.download = 'grafico-konva.png';
        link.href = dataURL;
        link.click();
      };

    const [gridSize, setGridSize] = useState(25); // Tamaño de cada celda
    const [gridWidth, setGridWidth] = useState(20); // Número de columnas

    return (
        <>
            <Typography variant="h6">Vista Previa del Gráfico</Typography>
            <Typography gutterBottom>Tamaño celda ({gridSize})</Typography>
              <Slider
                value={gridSize}
                min={10}
                max={50}
                onChange={(e, value) => setGridSize(value)}
                valueLabelDisplay="auto"
              />
              <Typography gutterBottom>Número de columnas ({gridWidth})</Typography>
              <Slider
                value={gridWidth}
                min={10}
                max={500}
                onChange={(e, value) => setGridWidth(value)}
                valueLabelDisplay="auto"
              />
            <CanvasDraw text={text} calculateRGB={calculateRGB} gridWidth={gridWidth} gridSize={gridSize} stageRef={stageRef} />
            <Box mt={2} textAlign="center">
                <Button variant="contained" color="primary" onClick={downloadImage}>
                    Descargar Imagen
                </Button>
            </Box>
        </>
    );
}

export default Canvas;