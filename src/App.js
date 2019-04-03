import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is the first edit to the development branch on <code>src/App.js</code>
          </p>
          <h3>Scroll Down for instruction</h3>
        </header>

        <h1>Getting Set Up on Github</h1>
        <h2>Generate SSH Keys</h2>
        <ol className="list">
          <li>1. <code>Generate SSH Key</code></li>
          <li>2. <code>Add Key to Github</code></li>
          <li>3. <code>Clone repository</code></li>
          <li>4. <code>Set Origin</code></li>
          <li>5. <code>Set Upstream</code></li>
        </ol>











        <div className="mw7 center">
          #Git Aliases
          <div className="mw7 center">
          <ul>
          <li><code>alias grc='git rm -r --cached '</code></li>
          <li><code>alias gc='git commit -m'</code></li>
          <li><code>alias gs='git status'</code></li>
          <li><code>alias ga='git add -A'</code></li>
          <li><code>alias gpl='git pull --prune'</code></li>
          <li><code>alias gsb='git show-branch -a'</code></li>
          <li><code>alias gb='git branch'</code></li>
          <li><code>alias gch='git checkout '</code></li>
          <li><code>alias gchb='git checkout -b '</code></li>
          <li><code>alias gchbt='git checkout --track -b '</code></li>
          <li><code>alias gi='git init'</code></li>
          <li><code>alias gm='git checkout master'</code></li>
          <li><code>alias gbd='git branch -D'</code></li>
          <li><code>alias gl='git log'</code></li>
          <li><code>alias glpf='git log --pretty=format:"%h - %an, %ar : %s"'</code></li>
          <li><code>alias glpo='git log --pretty=oneline'</code></li>
          <li><code>alias grsh='git reset --hard'</code></li>
          <li><code>alias gm='git merge'</code></li>
          <li><code>alias gdf="git diff"</code></li>
          <li><code>alias gchm="git checkout master"</code></li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
