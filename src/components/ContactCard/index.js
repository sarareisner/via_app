import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import CitizenIcon from './citizen.svg';
import ProfessionalIcon from './professional.svg';
import './style.scss'

class ContactCard extends React.Component {
  state = { expanded: false };

  handleHover = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
		const { contact } = this.props
    return (
      <Card className="contactCard" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <CardMedia
					className="cardMedia"
          image={contact.profile_image}
          title="Paella dish"
        />
        <CardContent className="cardContent mainContent">
					<img className="typeIcon" src={contact.driverType === 'Citizen' ? CitizenIcon: ProfessionalIcon} alt="citizen"/>
          <Typography variant="h6" className="details">{contact.name}</Typography>
					<Typography variant="subtitle2" className="details">Driver Rank: {contact.driverRank}</Typography>
        </CardContent>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent className="cardContent">
            <Typography variant="body1" className="details">Phone number: {contact.phone}</Typography>
						<Typography variant="body1" className="details">email: {contact.email}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default ContactCard;
