import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';




interface CountriesCardProps  {
    flagUrl?:string,
    name?:string,
    capital?:string,
    currency?:string,
    coatOfArms?:string

};


export default function CountriesCard({
    flagUrl,
    name,
    capital,
    currency,
    coatOfArms,
}:CountriesCardProps)  {
    return(
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="flag"
        height="140"
        image={flagUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         {"Capital"} -  {capital}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {"Currency"} - {currency}
        </Typography>
      </CardContent>
    </Card>
    )
}




