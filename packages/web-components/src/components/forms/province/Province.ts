import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { Country } from '../country/Country';
import '../select/Select';
import { FUIField } from '../field/Field';
import { Option } from '../../../global.d';

@customElement('fui-province')
export class FUIProvince extends FUIField {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  // enforce a valid country code when converting from attribute to property
  @property({ converter: (value) => {
    const country = Country[value as keyof typeof Country];
    return country;
  }}) country?: Country;

  get options(): Option[] {
    if (this.country == null) return [];
    switch(this.country) {
      case Country.CA:
        return Object.entries(Provinces).map(([code, province]) => ({ text: province, value: code, id: code }));
      case Country.US:
        return Object.entries(States).map(([code, state]) => ({ text: state, value: code, id: code }));
      default:
        console.log("No matching country code for", this.country);
        return [];
    }
  }

  render() {
    console.log(this.country);
    console.log(this.options);
    const label = this.label ?? this.country == Country.US ? "State" : "Province";
    return this.country 
      ? html`<fui-select label=${label} id=${this.id} .options=${this.options}></fui-select>`
      : html`<fui-input label=${label}></fui-input>`
  }
}

export enum States {
  AL = 'Alabama',
  AK = 'Alaska',
  AS = 'American Samoa',
  AZ = 'Arizona',
  AR = 'Arkansas',
  CA = 'California',
  CO = 'Colorado',
  CT = 'Connecticut',
  DE = 'Delaware',
  DC = 'District Of Columbia',
  FM = 'Federated States Of Micronesia',
  FL = 'Florida',
  GA = 'Georgia',
  GU = 'Guam',
  HI = 'Hawaii',
  ID = 'Idaho',
  IL = 'Illinois',
  IN = 'Indiana',
  IA = 'Iowa',
  KS = 'Kansas',
  KY = 'Kentucky',
  LA = 'Louisiana',
  ME = 'Maine',
  MH = 'Marshall Islands',
  MD = 'Maryland',
  MA = 'Massachusetts',
  MI = 'Michigan',
  MN = 'Minnesota',
  MS = 'Mississippi',
  MO = 'Missouri',
  MT = 'Montana',
  NE = 'Nebraska',
  NV = 'Nevada',
  NH = 'New Hampshire',
  NJ = 'New Jersey',
  NM = 'New Mexico',
  NY = 'New York',
  NC = 'North Carolina',
  ND = 'North Dakota',
  MP = 'Mariana Islands',
  OH = 'Ohio',
  OK = 'Oklahoma',
  OR = 'Oregon',
  PW = 'Palau',
  PA = 'Pennsylvania',
  PR = 'Puerto Rico',
  RI = 'Rhode Island',
  SC = 'South Carolina',
  SD = 'South Dakota',
  TN = 'Tennessee',
  TX = 'Texas',
  UT = 'Utah',
  VT = 'Vermont',
  VI = 'Virgin Islands',
  VA = 'Virginia',
  WA = 'Washington',
  WV = 'West Virginia',
  WI = 'Wisconsin',
  WY = 'Wyoming',
}

export enum Provinces {
  AB = 'Alberta',
  BC = 'British Columbia',
  MN = 'Manitoba',
  NB = 'New Brunswick',
  NS = 'Nova Scotia',
  NT = 'Northwest Territories',
  NU = 'Nunavut',
  ON = 'Ontario',
  PE = 'Prince Edward Island',
  QC = 'Quebec',
  SK = 'Saskatchewan',
  YT = 'Yukon Territory'
}
