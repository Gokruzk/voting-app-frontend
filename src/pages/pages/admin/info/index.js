// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardMobile from 'src/views/admin/info/CardMobile'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const InfoPage = () => {
  const programadores = [
    {
      nombre: 'NIGELL MARCEL JAMA OYARVIDE',
      email: 'nigelljama@gmail.com',
      github: 'Gokrusk',
      fotoUrl: 'https://img.icons8.com/ios/344/user-male-circle.png'
    },
    {
      nombre: 'RICARDO ENRIQUE VACA PEÑA',
      email: 'ricardovak22@gmail.com',
      github: 'Ricardo-VP',
      fotoUrl: 'https://img.icons8.com/ios/344/user-male-circle.png'
    }
  ]
  let indice = 1;

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 5 }}>
          <Typography variant='h4'>PROGRAMADORES</Typography>
        </Grid>
      </Grid>

      <Grid key={1} container spacing={6}>
        {programadores.map(programador => (
          <Grid key={indice++} item xs={12} sm={6}>
            <CardMobile programador={programador} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default InfoPage
