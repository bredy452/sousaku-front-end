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
      <div class={this.state.isLearning ? "floor" : null}>
        <div class={this.state.isLearning ? "fan" : null}>
          <div class={this.state.isLearning ? "table" : null}>
            <div class={this.state.isLearning ? "ukiyo" : null}>
              <div class={this.state.isLearning ? "paintArea" : null}>
                <div class={this.state.isLearning ? "sheets" : null}>
                  <div class={this.state.isLearning ? "sousaku" : null}>
                    <div class={this.state.isLearning ? "paintcolor" : null}>
                      <div class={this.state.isLearning ? "blackpaint" : null}>
                        <div class={this.state.isLearning ? "redpaint" : null}>
                          <div
                            class={
                              this.state.isLearning ? "temporaryredpaint" : null
                            }
                          >
                            <div
                              class={
                                this.state.isLearning
                                  ? "temporaryblackpaint"
                                  : null
                              }
                            >
                              <div
                                class={this.state.isLearning ? "brush" : null}
                              >
                                <div
                                  class={this.state.isLearning ? "splat" : null}
                                >
                                  <div
                                    class={
                                      this.state.isLearning ? "circle1" : null
                                    }
                                  >
                                    <div
                                      class={
                                        this.state.isLearning ? "circle2" : null
                                      }
                                    >
                                      <div
                                        class={
                                          this.state.isLearning
                                            ? "circle3"
                                            : null
                                        }
                                      >
                                        <div
                                          class={
                                            this.state.isLearning
                                              ? "line1"
                                              : null
                                          }
                                        >
                                          <div
                                            class={
                                              this.state.isLearning
                                                ? "line2"
                                                : null
                                            }
                                          >
                                            <div
                                              class={
                                                this.state.isLearning
                                                  ? "line3"
                                                  : null
                                              }
                                            >
                                              <div
                                                class={
                                                  this.state.isLearning
                                                    ? "leaves"
                                                    : null
                                                }
                                              >
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
