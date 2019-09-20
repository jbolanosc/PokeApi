import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

import PokemonCard from "./PokemonCard";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    overflow: "hidden"
  },
  gridList: {
    width: "100%"
  },
  gridListTile: {
    height: "700px"
  }
});

class PokemonList extends Component {
  state = {
    pokemons: []
  };

  async componentDidMount() {
    let res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20");
    this.setState({
      pokemons: res.data.results
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList
          cellHeight={"auto"}
          cols={4}
          spacing={6}
          className={classes.gridList}
        >
          <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
            <ListSubheader component="div">
              <Typography gutterBottom variant="h2" component="h2">
                Latest Pokemons
              </Typography>
            </ListSubheader>
          </GridListTile>
          {this.state.pokemons.map(pokemon => {
            return (
              <GridListTile style={{ height: "auto" }} key={pokemon.name}>
                <PokemonCard pokemon={pokemon.name} />
              </GridListTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}

PokemonList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PokemonList);
