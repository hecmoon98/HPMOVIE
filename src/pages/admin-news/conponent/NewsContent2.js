import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
export default class NewsContent2 extends Component {
  
  handle =()=>{
    
    this.fileInput.value = "";
    this.fileInput2.value = "";
    this.fileInput3.value = "";
    
  }

  render() {
    return (
      <div>
        <input id="file_input_file" type="file"  ref={ref=> this.fileInput = ref} />
        <input id="file_input_file" type="file"  ref={ref=> this.fileInput2 = ref} />
        <input id="file_input_file" type="file"  ref={ref=> this.fileInput3 = ref} />
        <button onClick={this.handle} type="button">Click Me!</button>
        <Button
                    onClick={this.fileUploadHandle2}
                    type="submit"
                    color="primary"
                    variant="contained"
                    data-dismiss="modal"
                    onClick={this.handle} 
                  >
                    Upload
                  </Button>
      </div>
    )
  }
}
