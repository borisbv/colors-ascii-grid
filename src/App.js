import React, { useState } from 'react';
import { AppBar, Tabs, Tab, TextField, Typography, Box, Grid2, Paper } from '@mui/material';
import Canvas from './components/canvas';
import BasicConfig from './components/configs/Basic';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [text, setText] = useState(`In neque sem, consectetur eu erat id, mollis placerat nunc. Nam ex libero, sollicitudin eu interdum vitae, viverra vitae purus. Sed eleifend sapien odio, quis auctor ipsum blandit ut. Sed semper sapien ligula, et blandit lorem tempus id. Integer at augue purus. Vestibulum feugiat hendrerit lacus sed euismod. Ut a tristique magna. Curabitur tincidunt nisi nec consequat posuere. Quisque at quam est. Duis iaculis lectus volutpat venenatis rutrum. Curabitur tristique molestie scelerisque. Duis ac dapibus enim. Curabitur feugiat vestibulum faucibus. Vestibulum tincidunt dolor in est varius eleifend.
Nunc mattis ante ut luctus fringilla. Curabitur interdum condimentum nisl, sit amet feugiat nulla ornare sed. In elit neque, tempus sed vulputate vitae, hendrerit a eros. Donec mollis auctor est quis laoreet. Maecenas nec molestie nulla. Vestibulum imperdiet lacus id pretium accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur velit nibh, mattis et sodales commodo, dictum in erat. Duis non erat purus. Proin interdum ante at quam aliquet, sed commodo diam posuere. Fusce sit amet tempor neque.
Nulla diam purus, pellentesque id arcu eget, condimentum rutrum ex. Aliquam placerat dolor lacinia purus convallis, ut commodo risus accumsan. Phasellus cursus laoreet velit a pharetra. Integer vulputate accumsan orci, eu molestie lacus aliquam non. Proin felis magna, consequat non massa mattis, dapibus tincidunt nisl. Integer auctor in lorem vel viverra. Etiam leo nunc, faucibus volutpat lectus sit amet, posuere dapibus dolor. Mauris blandit blandit pulvinar. Donec ac tristique ipsum. Nam maximus faucibus nulla, tristique ultricies dolor aliquam a.`);
  const [calculateRGB, setCalculateRGB] = useState(() => () => {});

  const handleTabChange = (_, newValue) => { setActiveTab(newValue); };


  return (
    <Box>
      {/* Barra de navegación */}
      <AppBar position="static">
        <Typography variant="h6" textAlign="center" p={2}>
          Colors Ascii Art
        </Typography>
      </AppBar>

      <Grid2 container spacing={2} style={{ marginTop: '16px' }}>
        {/* Text Input */}
        <Grid2 size={12} >
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">Texto para Generar Gráficos</Typography>
            <TextField
              multiline
              rows={4}
              placeholder="Escribe aquí..."
              variant="outlined"
              fullWidth
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Paper>
        </Grid2>

        {/* Configuración */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Tabs 
              onChange={handleTabChange}
              value={activeTab}
            >
              <Tab value={0} label="Basic" {...a11yProps(0)} />
              <Tab value={1} label="Modo 2" {...a11yProps(0)} />
            </Tabs>
            <TabPanel value={activeTab} index={0} >
              <BasicConfig setCalculateRGB={setCalculateRGB} />
            </TabPanel>
            <TabPanel value={activeTab} index={1} >
              En construcción ...
            </TabPanel>
          </Paper>
        </Grid2>

        {/* Gráfico */}
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Canvas text={text} calculateRGB={calculateRGB} />
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default App;
