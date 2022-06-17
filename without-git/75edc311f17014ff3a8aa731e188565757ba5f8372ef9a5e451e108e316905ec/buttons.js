// @flow
// "flow-bin": "^0.29.0",

import React from 'react';
require('./Button.css');

export type ButtonProps = {
  onClick: () => void,
  type: 'button' | 'reset' | 'submit',
  design: 'primary' | 'secondary' | 'page' | 'tooltipInfo' | 'tooltipDocs',
  onFocus: () => void,
  onmouseover: () => void,
  onmouseout: () => void,
  className:string,
  children: Array<HTMLElement>,
}

class Button extends React.Component {

  static defaultProps = {
    type: 'button',
    design: 'primary',
    className: 'btn',
  }

  constructor(props:ButtonProps){
    super(props);
  }

  render(){
    return (
      <button
        className={[`${this.props.design} ${this.props.className}`]}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button;
Icon.jsx
// @flow

import React from 'react';
require('./Icon.css');

import * as Glyphs from './Glyphs.jsx';

export type IconProps = {
  glyph:string,
  className?: string,
  title?: string,
  width?: string,
  height?: string,
};

export default class Icon extends React.Component {

  static defaultProps = {
    'className': 'icon',
    'width': '16',
    'height': '16',
  }

  constructor(props:IconProps){
    super(props);
  }

  render(){
    return(
      <svg
        id="icon"
        className={this.props.className}
        viewBox={`0 0 ${this.props.width} ${this.props.height}`}
        aria-labelledby="title"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id={this.props.title}>{this.props.title}</title>
        {Glyphs[this.props.glyph] || null}
      </svg>
    )
  }
}
IconButton.jsx
// @flow

import React from 'react';
import {Button} from './Button.jsx';
import type ButtonProps from './Button.jsx';
import {Icon} from '../Icons/Icon.jsx';
import type IconProps from '../Icons/Icon.jsx';
const IconButtonProps = Object.assign(...ButtonProps, ...IconProps)

export const IconButton = (props:IconButtonProps) =>
  <Button
    design={props.design}
    onClick={props.onClick}
    className={`iconBtn ${props.className}`}
  >
    <Icon glyph={props.glyph} />
  </Button>
LabelButton.jsx
// @flow

import React from 'react';
import type ButtonProps from './Button.jsx';
import Button from './Button.jsx';

type LabelProps = {
  label:string,
}

type LabelButtonProps = ButtonProps & LabelProps;

export const LabelButton = (props:LabelButtonProps) =>
  <Button design={props.design} onClick={props.onClick}>
    <label>{props.label}</label>
  </Button>
LabeledIconButton.jsx
// @flow

/* eslint-disable no-duplicate-imports */
import React from 'react';
import { Button } from './Button.jsx';
import type { ButtonProps } from './Button.jsx';
import { Icon } from '../Icons/Icon.jsx';
import type { IconProps } from '../Icons/Icon.jsx';

type LabelProps = {
  label:string
}

type LabeledIconButtonProps = ButtonProps & IconProps & LabelProps;

export const LabeledIconButton = (props:LabeledIconButtonProps) =>
  <Button design={props.design} className="labeledIconBtn">
    <Icon glyph={props.glyph} />
    <label>{props.label}</label>
  </Button>;
@joshblack
joshblack commented on Jul 14, 2016
So I think what you did is totally fine, just don't need to define prop types since you have flow annotations now. Common way is just to write out the input prop types explicitly:

// Disjoint union for the glyphs
type GlyphType = 'foo' | 'bar' | 'baz';

type IconButtonPropsType = {
  glyph: GlyphType;
  className: string;
  title: string;
  width: string;
  height: string;
};

const Icon = ({
  glyph,
  className = "icon",
  width = "16",
  height = "16"
} : IconButtonPropsType) => (
  <svg
    id="icon"
    className={className}
    viewBox={`0 0 ${width} ${height}`}
    aria-labelledby="title"
    preserveAspectRatio="xMidYMid meet"
  >
    <title id={Icon.title}>{Icon.title}</title>
    {Glyphs[glyph] || null}
  </svg>
);