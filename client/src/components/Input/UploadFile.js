// *******************************************************
// Upload Image Component
// -------------------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import * as C from '../index.js';
import * as S from '../../styles';
// --------------------------------

// *******************************************
// Component Implementation
// -------------------------------------------
class UploadImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imageSelected: (props.currentImage !== undefined),
            dragging: false,
            previewImageURL: props.currentImage || undefined
        }
    }

    _onDrop = (acceptedFiles, rejectedFiles) => {
        const { inputKey, updateInput } = this.props;
        if (acceptedFiles.length === 1) {
            let imageSelected = false;
            let previewImageURL = undefined;
            const reader = new FileReader();
            reader.onload = (e) => {
                imageSelected = true;
                previewImageURL = e.target.result;
                if (updateInput) {
                    updateInput(inputKey, acceptedFiles[0]);
                }
                this.setState({
                    imageSelected,
                    previewImageURL,
                    dragging: false,
                });
            };

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');

            reader.readAsDataURL(acceptedFiles[0]);

        }
    }

    _renderImagePreview = () => {
        const imageSize = 120;
        if (this.state.imageSelected) {
            return (
                <C.Image image={this.state.previewImageURL} marginTop={S.Margin.Top_20} marginBottom={S.Margin.Bottom_20} width={imageSize} height={imageSize} circle />
            );
        }
        return (
            <div className={[S.Background.grey, S.Border.Radius_75, S.Margin.Top_20, S.Margin.Bottom_20].join(" ")} style={{width: imageSize, height: imageSize}}>
            </div>
        );
    }

    _getBorderColour = () => {
        if (this.state.focus) {
            return S.Border.Colour_black;
        }
        switch (this.state.isValid) {
            case true:
                return S.Border.Colour_successGreen;
            case false:
                return S.Border.Colour_errorRed;
            default:
                return S.Border.Colour_grey;
        }
    }

    render() {

        const { inputKey } = this.props;
        const { placeholder, label, containerStyle, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight, width, height } = this.props;
        const borderColour = this._getBorderColour();

        return (
            <div className={[marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight, width, height, S.Layout.pointer].join(" ")} style={containerStyle}>
                {(label) ? <label htmlFor={inputKey} style={{cursor: 'pointer'}}><C.Text.Heading5 marginBottom={S.Margin.Bottom_20}>{label}</C.Text.Heading5></label> : null}
                    <Dropzone
                            id={inputKey}
                            multiple={false}
                            accept=".pdf,.doc,.docx,xls,xlsx"
                            maxSize={500000}
                            className={[
                                S.Fonts.BrandonGrotesque_regular,
                                S.Fonts.Size_19,
                                S.Fonts.Colour_black,
                                S.Width._100,
                                S.Border.Width_1,
                                borderColour,
                                S.Padding.Top_0,
                                S.Padding.Bottom_0,
                                S.Padding.Left_0,
                                S.Padding.Right_0,
                            ].join(" ")}
                            style={{
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%'
                            }}
                            onDrop={this._onDrop}
                            onDragEnter={this._onDragEnter}
                            onDragLeave={this._onDragLeave}
                            >
                            {this._renderImagePreview()}
                            <div className={[S.Layout.flexRow, S.Layout.bothAxisCenter, S.Layout.flexWrap, S.Width._100, S.Margin.Bottom_20, S.Layout.textCenter].join(" ")}>
                                <C.Text.Link href="#" marginTop={S.Margin.Top_5} marginLeft={S.Margin.Left_5}>{placeholder}</C.Text.Link>
                                <C.Text.Paragraph marginTop={S.Margin.Top_5}>&nbsp;or drag and drop.</C.Text.Paragraph>
                            </div>
                        </Dropzone>
            </div>
        );
    }
}


UploadImage.defaultProps = {
    // Input Functionality Props
    type: 'text',
    label: null,
    value: "",
    placeholder: null,
    inputKey: undefined,
    updateValidation: undefined,
    updateInput: undefined,
    validator: undefined,

    // Styles Props
    containerStyle: {},
    style: {},
    //marginTop: S.Margin.Top_20,
    //marginBottom: S.Margin.Bottom_20,
    marginLeft: null,
    marginRight: null,
    paddingTop: null,
    paddingBottom: null,
    paddingLeft: null,
    paddingRight: null,
    width: S.Width._100,
}

export default UploadImage;
// --------------------------------
