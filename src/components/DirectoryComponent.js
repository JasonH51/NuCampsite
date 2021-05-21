import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import CampsiteInfo from "./CampsiteinfoComponent";

function RenderDirectoryItem({ campsite }) {
  return (
    <Card>
      <CardImg width="100%" src={campsite.image} alt={campsite.name} />
      <CardImgOverlay>
        <CardTitle>{campsite.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

function Directory(props) {
  const directory = props.campsites.map((campsite) => {
    return (
      <div key={campsite.id} className="col-md-5 m-1">
        <RenderDirectoryItem campsite={campsite} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{directory}</div>
    </div>
  );
}

export default Directory;

{
  /* <div className="row">
          <div className="col-md-5 m-1">{this.renderSelectedCampsite(this.state.selectedCampsite)}</div>
        </div> */
}
{
  /* <CampsiteInfo campsite={this.state.selectedCampsite} /> */
}
