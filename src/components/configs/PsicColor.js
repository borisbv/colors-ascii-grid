import React, { useEffect } from 'react';
import { Box} from '@mui/material';
import { map } from './utils';



function PsicColorConfig({ setCalculateRGB }) {

    useEffect(() => {
        setCalculateRGB(() => (charPrev, char, charNext) => {
            let isVowel = char => "AEIOUaeiouáéíóúÁÉÍÓÚ".includes(char);
            let isSpaceOrSymbol = char => char === " " || "!@#$%^&*()_+-=<>?,.".includes(char);
    
            let r, g, b;
            if (isVowel(char)) {
                // Colores cálidos
                r = map(char.charCodeAt(0), 0, 255, 200, 255); // Más rojo
                g = map(charPrev.charCodeAt(0), 0, 255, 50, 200); // Tonos naranjas
                b = map(charNext.charCodeAt(0), 0, 255, 0, 100); // Evitar azul
            } else if (isSpaceOrSymbol(char)) {
                // Neutros para espacios y símbolos
                r = g = b = map(char.charCodeAt(0), 0, 255, 200, 255); // Gris claro
            } else {
                // Colores fríos (consonantes)
                r = map(charPrev.charCodeAt(0), 0, 255, 0, 50); // Bajo en rojo
                g = map(char.charCodeAt(0), 0, 255, 50, 200); // Verdes claros a oscuros
                b = map(charNext.charCodeAt(0), 0, 255, 200, 255); // Dominante en azul
            }
            return `rgb(${r},${g},${b})`;
        });
      }, [setCalculateRGB]);

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
                        Vocales tonos calidos: Rojos y Naranjas <br />
                        Consonantes tonos frios: Verdes y Azules <br />
                        Espacios y simbolos: Gris claro
                    </code>
                </pre>
            </Box>
        </Box>
    );
}

export default PsicColorConfig;