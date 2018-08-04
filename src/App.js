import React from 'react';
import Header from './components/Header';
import { Jumbotron, Button } from 'reactstrap';
import HomeContainer from './containers/HomeContainer';
import KajianKodingContainer from './containers/KajianKodingContainer';
import SantrenKilatContainer from './containers/SantrenKilatContainer';
import MondokContainer from './containers/MondokContainer';
import TentangKamiContainer from './containers/TentangKamiContainer';

class App extends React.Component {
  state = {
    page: 'Home'
  }

  ganti = (page)=>{
    this.setState({
      page: page
    })
  }

  render(){
    return (
      <div>
        <Header page={this.state.page} pindahHalaman={this.ganti} />

        <Jumbotron>
          <h1 className="display-3">{this.state.page}</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>

        {/* <Button onClick={()=>{this.ganti('home')}}>Home</Button>
        <Button onClick={()=>{this.ganti('kajian')}}>Kajian</Button>
        <Button onClick={()=>{this.ganti('santrenKilat')}}>Santren Kilat</Button>
        <Button onClick={()=>{this.ganti('mondok')}}>Mondok</Button>
        <Button onClick={()=>{this.ganti('tentang')}}>Tentang</Button> */}

        {this.state.page == 'Home' && <HomeContainer />}
        {this.state.page == 'Kajian Koding' && <KajianKodingContainer />}
        {this.state.page == 'Santren Kilat' && <SantrenKilatContainer />}
        {this.state.page == 'Mondok' && <MondokContainer />}
        {this.state.page == 'Tentang Kami' && <TentangKamiContainer />}

        
      </div>
    )
  }
}
export default App;