import React from 'react';
import { Container, Grid, List} from 'semantic-ui-react';

export default class Bottom extends React.Component {
  render(){
    return(
        <div className="footer-background">
          <Container>
            <Grid columns={3}>
              <Grid.Column>
                <List>
                  <List.Item>
                    <iframe src="https://www.youtube.com/embed/YKDm_9CGfpY"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                            allowFullScreen
                            title="video"
                    />
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item>
                    <div className="adventure title">
                      <div className="item">BEGIN YOUR ADVENTURE</div>
                    </div>
                  </List.Item>
                  <div className="adventure middle">
                    <List.Item>
                      Join the fight for freedom! Dive into the next chapter of the critically acclaimed game FINAL FANTASY XIV Online with its epic next expansion pack - Stormblood!
                    </List.Item>
                    <List.Item>
                      Journey to the East to explore vast, new lands and play as two new jobs ─ red mage and samurai.
                    </List.Item>
                    <List.Item>
                      New tales of daring and adventure await as the Warrior of Light prepares for a journey beyond the borders of Aldenard.
                    </List.Item>
                  </div>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item>
                    <a className="button-red"
                       href="https://ffxiv.na.square-enix.com/">
                      <span>Buy Now</span>
                    </a>
                  </List.Item>
                  <List.Item>
                    <div class="available">
                      AVAILABLE ON
                    </div>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    );
  }
}