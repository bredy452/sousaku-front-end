import "./App.css";
import React, { Component } from "react";
import Home from "./Components/Home";
import Learn from "./Components/Learn";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLearning: false,
    };
  }

  isMobileOrNot = () => {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      /* your code here */
    }
  };

  toggleLearning = () => {
    this.setState({
      isLearning: !this.state.isLearning,
    });
  };

  render() {
    return (
      <div class="floor">
        <div class="fan">
          <div class="table">
            <div class="ukiyo">
              <div class="paintArea">
                <div class="sheets">
                  <div class="sousaku">
                    <div class="paintcolor">
                      <div class="blackpaint">
                        <div class="redpaint">
                          <div class="temporaryredpaint">
                            <div class="temporaryblackpaint">
                              <div class="brush">
                                <div class="splat">
                                  <div class="circle1">
                                    <div class="circle2">
                                      <div class="circle3">
                                        <div class="line1">
                                          <div class="line2">
                                            <div class="line3">
                                              <div class="leaves">
                                                {this.state.isLearning ? (
                                                  <Learn
                                                    toggleLearning={
                                                      this.toggleLearning
                                                    }
                                                  />
                                                ) : (
                                                  <Home
                                                    toggleLearning={
                                                      this.toggleLearning
                                                    }
                                                  />
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
