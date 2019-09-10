import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import FileDrop from 'react-file-drop';
import { apiCall } from "../../services/api";
import Loading from "../../containers/Loading";

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Drag and drop file here",
            fileName: "",
            selectedFile: null
        }
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleDrop = (files, event) => {
        this.setState({text: files[0].name, selectedFile: files[0]});
    }

    handleUpload() {
        this.props.setLoading(true);
        var data = new FormData();
        data.append('fileName', this.state.fileName);
        data.append('file', this.state.selectedFile);
        apiCall("post", `/api/community/upload`, data)
        .then((returnMessage)=> {
            var newTemplates = Array.from(this.props.templates)
            newTemplates.push(returnMessage.data.template);
            this.props.setTemplates(newTemplates)
            this.props.setLoading(false);
        })
        .catch((error)=> {
            console.log(error);
        })
    }

    render() {
        return(
            <Card className="text-center">
                <Card.Header>File Upload (New Template)</Card.Header>
                {(this.props.loading) ? (
                    <Loading />
                ) : (
                    <Card.Body>
                        {/* <label className="btn btn-primary">
                            Choose File
                            <input type="file" style={{display: "none"}}/>
                        </label>
                        <Card.Title>OR</Card.Title> */}
                        <div id="react-file-drop" style={{border: "1px dashed black", width: 750, height: 50, display: "block", marginLeft: "auto", marginRight: "auto", padding: 10}}>
                            <FileDrop onDrop={this.handleDrop} //onDragOver={this.handleDragOver} onDragLeave={this.handleDragLeave}
                            >
                                {this.state.text}
                            </FileDrop>
                        </div>
                        <br />
                        <Container>
                            <Row>
                                <Col sm={8}><input type="text" placeholder="Template Name" onChange={e=>{this.setState({fileName: e.target.value})}} /></Col>
                                <Col sm={4}><Button onClick={this.handleUpload}>Upload</Button></Col>
                            </Row>
                        </Container>
                    </Card.Body>
                )}
            </Card>
        )
    }
}

export default FileUpload;