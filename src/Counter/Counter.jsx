import React, { Component } from "react";
import styles from "./Counter.module.css";

export default class Counter extends Component {
  state = {
    variableValue: this.props.initialValue,
    title: this.props.title,
    subtitle: this.props.subtitle,
    variableSummand: this.props.variableSummand,
    firstSummand: this.props.firstSummand,
    secondSummand: this.props.secondSummand,
    thirdSummand: this.props.thirdSummand,
  };

  handlePlus = () => {
    this.setState((prevState) => ({
      variableValue: prevState.variableValue + prevState.variableSummand,
    }));
  };

  handleMinus = () => {
    this.setState((prevState) => ({
      variableValue: prevState.variableValue - prevState.variableSummand,
    }));
  };

  handleSummandOne = () => {
    this.setState((prevState) => ({
      variableSummand: prevState.firstSummand,
    }));
  };

  handleSummandFive = () => {
    this.setState((prevState) => ({
      variableSummand: prevState.secondSummand,
    }));
  };

  handleSummandTen = () => {
    this.setState((prevState) => ({
      variableSummand: prevState.thirdSummand,
    }));
  };

  render() {
    const { title, subtitle, variableValue } = this.state;
    return (
      <div className={styles.section}> 
        <div>
          <h1 className={styles.title}>{title}</h1>
          <h4 className={styles.description}>
            Для роботи лічильника спочатку необхідно обрати режим підрахунку
          </h4>
          <button onClick={this.handleMinus} className={styles.button}>-</button>
          <span className={styles.number}>{variableValue}</span>
          <button onClick={this.handlePlus} className={styles.button}>+</button>
        </div>

        <div>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <div className={styles.buttonsWrapper}>
            <button onClick={this.handleSummandOne} className={styles.button}>± 1</button>
            <button onClick={this.handleSummandFive} className={styles.button}>± 5</button>
            <button onClick={this.handleSummandTen} className={styles.button}>± 10</button>
          </div>
        </div>
      </div>
    );
  }
}
