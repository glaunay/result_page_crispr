import { Component, Prop, h } from '@stencil/core';
import "@mmsb/genomic-card";
import "@mmsb/table-crispr"

@Component({
  tag: 'result-page',
  styleUrl: 'my-component.css',
  shadow: true
})

export class MyComponent {
// *************************** PROPERTY & CONSTRUCTOR ***************************
  @Prop() complete_data: string;
  @Prop() all_data: string;
// *************************** LISTEN & EMIT ***************************



// *************************** CLICK ***************************


// *************************** DISPLAY ***************************

  render() {
    console.log("rendr called")
    // console.log(this.complete_data);

    return ([
      <div class="table">
      <table-crispr complete_data={this.complete_data}></table-crispr>
    </div>,
      <div class="card">
      <genomic-card all_data={this.all_data} org_names="Buchnera aphidicola (Cinara tujafilina) GCF_000217635.1&Aliivibrio wodanis GCF_000953695.1" diagonal_svg={700}></genomic-card>
    </div>
      ]);
  }
}
