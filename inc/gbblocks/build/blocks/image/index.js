/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  let {
    icon,
    size = 24,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plus.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plus.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plus);
//# sourceMappingURL=plus.js.map

/***/ }),

/***/ "./src/blocks/image/edit.js":
/*!**********************************!*\
  !*** ./src/blocks/image/edit.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_placeholder_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/placeholder.jpg */ "./src/assets/images/placeholder.jpg");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Internal Dependencies
 */

class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(...arguments);
  }
  render() {
    const {
      attributes: {
        imageId,
        imageAlt,
        imageDefaultAlt,
        imageUrl,
        webpImageUrl,
        mdimageUrl,
        webpmdImageUrl,
        xsimageUrl,
        webpxsImageUrl,
        isImage,
        anchor,
        caption,
        captionText
      },
      Image,
      setAttributes
    } = this.props;
    const instructions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("To edit the background image, you need permission to upload media.", "smt-theme"));
    const ALLOWED_MEDIA_TYPES = ["image"];
    const onUpdateImage = image => {
      setAttributes({
        imageId: image.id,
        imageUrl: image?.sizes?.xl?.url ? image?.sizes?.xl?.url : image.url,
        mdimageUrl: image?.sizes?.md?.url ? image?.sizes?.md?.url : "",
        xsimageUrl: image?.sizes?.xs?.url ? image?.sizes?.xs?.url : "",
        imageDefaultAlt: image.alt,
        captionText: image.caption
      });
    };
    const onRemoveImage = () => {
      setAttributes({
        imageId: undefined,
        imageUrl: "",
        xsimageUrl: "",
        mdimageUrl: "",
        webpImageUrl: "",
        webpmdImageUrl: "",
        webpxsImageUrl: ""
      });
    };
    if (Image) {
      var mainwebp = Image.source_url.substring(0, Image.source_url.lastIndexOf(".") + 1) + "webp";
      if (Image.media_details.sizes["xl"]) {
        var xlwebp = Image.media_details.sizes["xl"].source_url.substring(0, Image.media_details.sizes["xl"].source_url.lastIndexOf(".") + 1) + "webp";
        var xhr = new XMLHttpRequest();
        xhr.open("HEAD", xlwebp, false);
        xhr.send();
        if (xhr.status != "404") {
          setAttributes({
            webpImageUrl: xlwebp
          });
        } else {
          setAttributes({
            webpImageUrl: mainwebp
          });
        }
      } else {
        setAttributes({
          webpImageUrl: mainwebp
        });
      }
      if (Image.media_details.sizes["md"]) {
        var mdwebp = Image.media_details.sizes["md"].source_url.substring(0, Image.media_details.sizes["md"].source_url.lastIndexOf(".") + 1) + "webp";
        var xhr = new XMLHttpRequest();
        xhr.open("HEAD", mdwebp, false);
        xhr.send();
        if (xhr.status != "404") {
          setAttributes({
            webpmdImageUrl: mdwebp
          });
        } else {
          setAttributes({
            webpmdImageUrl: ""
          });
        }
      } else {
        setAttributes({
          webpmdImageUrl: ""
        });
      }
      if (Image.media_details.sizes["xs"]) {
        var xswebp = Image.media_details.sizes["xs"].source_url.substring(0, Image.media_details.sizes["xs"].source_url.lastIndexOf(".") + 1) + "webp";
        var xhr = new XMLHttpRequest();
        xhr.open("HEAD", xswebp, false);
        xhr.send();
        if (xhr.status != "404") {
          setAttributes({
            webpxsImageUrl: xswebp
          });
        } else {
          setAttributes({
            webpxsImageUrl: ""
          });
        }
      } else {
        setAttributes({
          webpxsImageUrl: ""
        });
      }
    }
    const TagName = caption == true ? "figure" : "div";
    const onContentChange = value => {
      setAttributes({
        captionText: value
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Settings", "smt-theme"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, {
      fallback: instructions
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Background Image", "smt-theme"),
      onSelect: onUpdateImage,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: imageId,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          className: !imageId ? "editor-post-featured-image__toggle" : "editor-post-featured-image__preview",
          onClick: open
        }, !!imageId && !Image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Spinner, null), !imageId && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Set image", "smt-theme"), !!imageId && Image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveWrapper, {
          naturalWidth: Image.media_details.width,
          naturalHeight: Image.media_details.height
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
          src: Image.source_url,
          alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Image", "smt-theme")
        })));
      }
    })), !!imageId && Image ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Image", "smt-theme"),
      onSelect: onUpdateImage,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: imageId,
      render: _ref2 => {
        let {
          open
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          onClick: open,
          variant: "secondary",
          isLarge: true,
          className: "is-secondary block-section-background-image-replace"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Replace image", "smt-theme"));
      }
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null), !!imageId ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      onClick: onRemoveImage,
      isDestructive: true,
      className: "is-link is-destructive block-section-background-image-remove"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Remove image", "smt-theme"))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      className: "block-mt",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Image Alt - Text", "smt-theme"),
      type: "text",
      placeholder: "Overwrite default Alt-Text...",
      value: imageAlt,
      onChange: value => setAttributes({
        imageAlt: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Styles", "smt-theme"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Caption", "smt-theme"),
      checked: caption,
      onChange: () => setAttributes({
        caption: !caption
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Additional", "smt-theme"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Anchor", "smt-theme"),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Specify Id???", "smt-theme"),
      type: "text",
      value: anchor,
      onChange: value => setAttributes({
        anchor: value
      })
    }))), !imageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "placeholder__img"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: _assets_images_placeholder_jpg__WEBPACK_IMPORTED_MODULE_8__,
      alt: "placeholder"
    })) : isImage == true ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "site--logo"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      href: "/"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: `${imageUrl}`,
      alt: `${imageAlt}`
    }))) : imageUrl || xsimageUrl || mdimageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TagName, {
      id: anchor ? anchor : null,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(`image`)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("picture", {
      className: `image__content`
    }, imageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, webpImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${webpImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${imageUrl}`
    })) : mdimageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, webpmdImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${webpmdImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${mdimageUrl}`
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, webpxsImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${webpxsImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${xsimageUrl}`
    })), mdimageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, webpmdImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${webpmdImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${mdimageUrl}`
    })) : imageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, webpImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${webpImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${imageUrl}`
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, webpxsImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${webpxsImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${xsimageUrl}`
    })), xsimageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, webpxsImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${webpxsImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${xsimageUrl}`
    })) : mdimageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, webpmdImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${webpmdImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${mdimageUrl}`
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, webpImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${webpImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${imageUrl}`
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: `${imageUrl}`,
      alt: "" !== imageAlt ? `${imageAlt}` : `${imageDefaultAlt}`
    })), caption == true && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      identifier: "content",
      tagName: "figcaption",
      className: "image__caption",
      value: captionText,
      onChange: onContentChange,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Image Caption", "smt-theme"),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Add caption here...", "smt-theme")
    }, _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Platform.isNative && {
      deleteEnter: true
    }, {
      // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
      allowedFormats: ["core/bold", "core/italic", "core/link"]
    }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.withSelect)((select, props) => {
  const {
    getMedia
  } = select("core");
  const {
    imageId
  } = props.attributes;
  return {
    Image: imageId ? getMedia(imageId) : null
  };
}))(Edit));

/***/ }),

/***/ "./src/blocks/image/save.js":
/*!**********************************!*\
  !*** ./src/blocks/image/save.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



class Save extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(...arguments);
  }
  render() {
    const {
      attributes: {
        imageAlt,
        imageDefaultAlt,
        imageUrl,
        webpImageUrl,
        mdimageUrl,
        webpmdImageUrl,
        xsimageUrl,
        webpxsImageUrl,
        isImage,
        caption,
        captionText,
        anchor
      }
    } = this.props;
    const TagName = caption == true ? "figure" : "div";
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isImage == true ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "site--logo"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "/"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `${imageUrl}`,
      alt: `${imageAlt}`
    }))) : (imageUrl || mdimageUrl || xsimageUrl) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, {
      id: anchor ? anchor : null,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(`image`)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
      className: `image__content`
    }, imageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, webpImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${webpImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${imageUrl}`
    })) : mdimageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, webpmdImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${webpmdImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${mdimageUrl}`
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, webpxsImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${webpxsImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${xsimageUrl}`
    })), mdimageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, webpmdImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${webpmdImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${mdimageUrl}`
    })) : imageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, webpImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${webpImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${imageUrl}`
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, webpxsImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${webpxsImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${xsimageUrl}`
    })), xsimageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, webpxsImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${webpxsImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${xsimageUrl}`
    })) : mdimageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, webpmdImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${webpmdImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${mdimageUrl}`
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, webpImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${webpImageUrl}`,
      type: "image/webp"
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${imageUrl}`
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `${imageUrl}`,
      alt: "" !== imageAlt ? `${imageAlt}` : `${imageDefaultAlt}`
    })), caption == true && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      value: captionText,
      tagName: "figcaption"
    })));
  }
}

/***/ }),

/***/ "./src/utils/block-helpers.js":
/*!************************************!*\
  !*** ./src/utils/block-helpers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonBlockAppender": () => (/* binding */ ButtonBlockAppender),
/* harmony export */   "hasEmptyAttributes": () => (/* binding */ hasEmptyAttributes),
/* harmony export */   "hasFormattingCategory": () => (/* binding */ hasFormattingCategory),
/* harmony export */   "pattern_colors": () => (/* binding */ pattern_colors),
/* harmony export */   "supportsCollections": () => (/* binding */ supportsCollections),
/* harmony export */   "theme_colors": () => (/* binding */ theme_colors)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);

/**
 * external dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Determine if the block attributes are empty.
 *
 * @param {Object} attributes The block attributes to check.
 * @return {boolean} The empty state of the attributes passed.
 */
const hasEmptyAttributes = attributes => {
  return !Object.entries(attributes).map(_ref => {
    let [, value] = _ref;
    if (typeof value === "string") {
      value = value.trim();
    }
    if (value instanceof Array) {
      value = value.length;
    }
    if (value instanceof Object) {
      value = Object.entries(value).length;
    }
    return !!value;
  }).filter(value => value === true).length;
};

/**
 * Return bool depending on registerBlockCollection compatibility.
 *
 * @return {boolean} Value to indicate function support.
 */
const supportsCollections = () => {
  if (typeof _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockCollection === "function") {
    return true;
  }
  return false;
};

/**
 * Check for which category to assign.
 *
 * @return {boolean} Value to indicate function support.
 */
const hasFormattingCategory = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.getCategories)().some(function (category) {
  return category.slug === "formatting";
});
const theme_colors = [{
  name: "White",
  slug: "one",
  color: "#ffffff"
}, {
  name: "Light Grey",
  slug: "two",
  color: "#f7f7f7"
}, {
  name: "Red",
  slug: "three",
  color: "#BC1717"
}, {
  name: "Blue",
  slug: "four",
  color: "#59A7D4"
}, {
  name: "Green",
  slug: "five",
  color: "#4AC8B5"
}, {
  name: "Grey",
  slug: "six",
  color: "#607886"
}, {
  name: "Dark Grey",
  slug: "seven",
  color: "#39515E"
}, {
  name: "Black",
  slug: "eight",
  color: "#000000"
}];
const pattern_colors = [{
  name: "White",
  slug: "one",
  color: "#ffffff"
}, {
  name: "Light Grey",
  slug: "two",
  color: "#f7f7f7"
}, {
  name: "Red",
  slug: "three",
  color: "#BC1717"
}, {
  name: "Blue",
  slug: "four",
  color: "#59A7D4"
}, {
  name: "Green",
  slug: "five",
  color: "#4AC8B5"
}, {
  name: "Grey",
  slug: "six",
  color: "#607886"
}, {
  name: "Dark Grey",
  slug: "seven",
  color: "#39515E"
}, {
  name: "Black",
  slug: "eight",
  color: "#000000"
}, {
  name: "Grey to Red",
  slug: "gradient",
  color: "linear-gradient(135deg, #7A8D96 0%, #BA2B2B 100%)"
}];
const ButtonBlockAppender = (_ref2, ref) => {
  let {
    rootClientId,
    label
  } = _ref2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.Inserter, {
    rootClientId: rootClientId,
    buttonText: "Add Block",
    renderToggle: _ref3 => {
      let {
        onToggle,
        disabled,
        hasSingleBlockType
      } = _ref3;
      const isToggleButton = !hasSingleBlockType;
      let inserterButton = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        ref: ref,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("my-button-block-appender"),
        onClick: onToggle,
        disabled: disabled,
        label: label
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), label);
      return inserterButton;
    },
    isAppender: true
  });
};

/***/ }),

/***/ "./src/utils/helper.js":
/*!*****************************!*\
  !*** ./src/utils/helper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlockIconColor": () => (/* binding */ getBlockIconColor),
/* harmony export */   "registerBlock": () => (/* binding */ registerBlock)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-helpers */ "./src/utils/block-helpers.js");
/**
 * WordPress dependencies
 */


// Categories Helper


/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 */
const registerBlock = block => {
  if (!block) {
    return;
  }
  let {
    category
  } = block;
  const {
    name,
    settings
  } = block;
  if (!(0,_block_helpers__WEBPACK_IMPORTED_MODULE_1__.supportsCollections)() && !name.includes("gallery")) {
    category = "smt-theme";
  }
  let icon = "";
  if (!!settings?.icon) {
    icon = {
      foreground: getBlockIconColor(),
      src: settings.icon
    };
  }
  const isV2 = block?.metadata?.apiVersion === 2;
  const v2Settings = isV2 ? block?.metadata : {};
  if (!!settings?.attributes && isV2) {
    v2Settings.attributes = {
      ...v2Settings.attributes,
      ...settings?.attributes
    };
  }
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
    ...settings,
    category,
    icon,
    // V2 Block API Upgrades
    ...v2Settings
  });
};

/**
 * Returns the color used for Icon Color in the block editor.
 */
function getBlockIconColor() {
  return "#607886";
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/assets/images/placeholder.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/placeholder.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/placeholder.feef09ce.jpg";

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/blocks/image/block.json":
/*!*************************************!*\
  !*** ./src/blocks/image/block.json ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"smt-theme/image","version":"0.1.5","title":"Image","category":"block-category-basic","keywords":["image","picture"],"description":"","supports":{"html":false,"anchor":false,"customClassName":false},"attributes":{"imageUrl":{"type":"string","default":""},"webpImageUrl":{"type":"string","default":""},"xsimageUrl":{"type":"string","default":""},"webpxsImageUrl":{"type":"string","default":""},"mdimageUrl":{"type":"string","default":""},"webpmdImageUrl":{"type":"string","default":""},"imageId":{"type":"number","default":""},"imageAlt":{"type":"string","default":""},"imageDefaultAlt":{"type":"string","default":""},"anchor":{"type":"string","default":""},"caption":{"type":"boolean","default":false},"captionText":{"type":"string","source":"html","selector":"figcaption","default":""},"isImage":{"type":"boolean","default":false}},"textdomain":"smt-theme","parent":["smt-theme/column"],"editorScript":"file:./index.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************!*\
  !*** ./src/blocks/image/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/image/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/image/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/blocks/image/block.json");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_5__;

const settings = {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "baad9677-7cce-4fc1-b389-ec0d88614ec2",
    "data-name": "Ebene 1",
    viewBox: "0 0 30 30"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "30",
    height: "30",
    rx: "3.29",
    fill: "#1e1e1e"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
    points: "20.31 9.66 12.2 19.65 8.89 14.78 2.27 24.51 8.89 24.51 15.51 24.51 27.73 24.51 20.31 9.66",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "10.78",
    cy: "8.64",
    r: "3.15",
    fill: "#fff"
  })),
  /**
   * @see ./edit.js
   */
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit__WEBPACK_IMPORTED_MODULE_3__["default"], props));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_save__WEBPACK_IMPORTED_MODULE_4__["default"], props);
  }
};
(0,_utils_helper__WEBPACK_IMPORTED_MODULE_6__.registerBlock)({
  metadata: _block_json__WEBPACK_IMPORTED_MODULE_5__,
  name,
  settings
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map