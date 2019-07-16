import { Component, Prop, h } from '@stencil/core';
import "@mmsb/genomic-card";
import "@mmsb/table-crispr"
import "@mmsb/linear-card"

@Component({
  tag: 'result-page',
  styleUrl: 'my-component.css',
  shadow: true
})

export class MyComponent {
// *************************** PROPERTY & CONSTRUCTOR ***************************
  @Prop() complete_data: string;
  @Prop() all_data: string;
  @Prop() org_names: string;
  @Prop() gene: string;
// *************************** LISTEN & EMIT ***************************



// *************************** CLICK ***************************


// *************************** DISPLAY ***************************

  render() {
    console.log("rendr called")
    // console.log(this.all_data);

    return ([
      <div class="table">
      <table-crispr complete_data={this.complete_data}></table-crispr>
    </div>,
      <div class="card">
      <genomic-card all_data={this.all_data} org_names={this.org_names} diagonal_svg={700} gene={this.gene}></genomic-card>
    </div>,
    <div id="Result">
   </div>
      ]);
  }
}

window.addEventListener("sgDataSection", () => {
  let node = document.querySelector("body > result-page").shadowRoot.querySelector("linear-card");
  if(node == null){
    //@ts-ignore
    node = document.createElement("linear-card");
    let resDiv = document.querySelector("body > result-page").shadowRoot.querySelector("#Result");
    resDiv.appendChild(node);
  } else{
    node.remove();
    node = document.createElement("linear-card");
    let resDiv = document.querySelector("body > result-page").shadowRoot.querySelector("#Result");
    resDiv.appendChild(node);


  }
  console.log("Linear Card loading")
  node.setAttribute("width_bar", '90%');
  node.setAttribute("width_div", (document.querySelector("body > result-page").shadowRoot.querySelector("#Result") as HTMLDivElement).getBoundingClientRect().width.toString());
  node.setAttribute("all_sgrna", event["detail"]["allSgrna"]);
  node.setAttribute("gene", event["detail"]["gene"]);
})
