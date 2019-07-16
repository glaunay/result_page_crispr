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
      <genomic-card all_data={this.all_data} org_names={this.org_names} diagonal_svg={700} gene='{"Enterobacter sp. 638 GCF_000016325.1": {"NC_009436.1": [{"start": "255180", "end": "255599"}, {"start": "842680", "end": "843099"}, {"start": "3343077", "end": "3343496"}, {"start": "4024310", "end": "4024729"}, {"start": "4269724", "end": "4270143"}, {"start": "4360796", "end": "4361215"}, {"start": "4466539", "end": "4466958"}]}, "Candidatus Blochmannia vafer str. BVAF GCF_000185985.2": {"NC_014909.2": [{"start": "626246", "end": "626664"}]}}'></genomic-card>
    </div>,
    <div id="Result">
   </div>
      ]);
  }
}

window.addEventListener("sgDataSection", () => {
  console.log("msg recu outside render");
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
  //@ts-ignore
  console.log((document.querySelector("body > result-page").shadowRoot.querySelector("#Result") as HTMLDivElement).getBoundingClientRect().width);
  console.log("Linear Card loading")
  console.log(event["detail"]["gene"]);
  node.setAttribute("width_bar", '90%');
  node.setAttribute("width_div", (document.querySelector("body > result-page").shadowRoot.querySelector("#Result") as HTMLDivElement).getBoundingClientRect().width.toString());
  node.setAttribute("all_sgrna", event["detail"]["allSgrna"]);
  node.setAttribute("gene", event["detail"]["gene"]);
})
