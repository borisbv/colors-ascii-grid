import React, { useState, useEffect } from 'react';
import { Slider, Typography, Box} from '@mui/material';
import { map } from './utils';



function BasicInvConfig({ setCalculateRGB }) {
    const [redIntensity, setRedIntensity] = useState([0, 255]);
    const [greenIntensity, setGreenIntensity] = useState([0, 255]);
    const [blueIntensity, setBlueIntensity] = useState([0, 255]);

    useEffect(() => {
        setCalculateRGB(() => (charPrev, char, charNext) => {
            const r = map(charPrev ? 256 - charPrev.charCodeAt(0) % 256 : 0, 0, 255, redIntensity[0], redIntensity[1]);
            const g = map(char ? 256 - char.charCodeAt(0) % 256 : 0, 0, 255, greenIntensity[0], greenIntensity[1]);
            const b = map(charNext ? 256 - charNext.charCodeAt(0) % 256 : 0, 0, 255, blueIntensity[0], blueIntensity[1]);
            return `rgb(${r},${g},${b})`;
        });
      }, [setCalculateRGB, redIntensity, greenIntensity, blueIntensity]);


    return (
        <Box>
            <Box
                sx={{
                    backgroundColor: '#f5f5f5',
                    padding: 2,
                    borderRadius: 2,
                    overflow: 'auto',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    border: '1px solid #ddd',
                }}
            >
                <pre>
                    <code>
                        Mapping inverso <br />
                        R: 255 - asciiPrev  <br />
                        G: 255 - ascii  <br />
                        B: 255 - asciiNext
                    </code>
                </pre>
            </Box>
            
            <Typography variant="h6" style={{ marginBottom:20, marginTop:20 }} >Rango RGB</Typography>
            <Typography gutterBottom>Intensidad Rojo</Typography>
            <Slider
                value={redIntensity}
                min={0}
                max={255}
                onChange={(e, value) => setRedIntensity(value)}
                valueLabelDisplay="auto"
            />
            <Typography gutterBottom>Intensidad Verde</Typography>
            <Slider
                value={greenIntensity}
                min={0}
                max={255}
                onChange={(e, value) => setGreenIntensity(value)}
                valueLabelDisplay="auto"
            />
            <Typography gutterBottom>Intensidad Azul</Typography>
            <Slider
                value={blueIntensity}
                min={0}
                max={255}
                onChange={(e, value) => setBlueIntensity(value)}
                valueLabelDisplay="auto"
            />
        </Box>
    );
}

export default BasicInvConfig;