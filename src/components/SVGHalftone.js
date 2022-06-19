import React from "react";
import usePosition from '../helpers/usePosition';

const SVGHalftone = props => {
  const [position] = usePosition(props)

  return (
    <>
      <svg
        style={position}
        className={props.className}
        xmlnsdc="http://purl.org/dc/elements/1.1/"
        xmlnscc="http://creativecommons.org/ns#"
        xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlnssvg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnssodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlnsinkscape="http://www.inkscape.org/namespaces/inkscape"
        version="1.1"
        id="svg901"
        width="799.95935"
        height="604.23889"
        viewBox="0 0 799.95935 604.23889"
        sodipodidocname="halftone.svg"
        inkscapeversion="1.0.2 (e86c870, 2021-01-15)">
        <metadata
          id="metadata907">
          <rdfRDF>
            <ccWork
              rdfabout="">
              <dcformat>image/svg+xml</dcformat>
              <dctype
                rdfresource="http://purl.org/dc/dcmitype/StillImage" />
              <dctitle></dctitle>
            </ccWork>
          </rdfRDF>
        </metadata>
        <defs
          id="defs905" />
        <sodipodinamedview
          pagecolor="#ffffff"
          bordercolor="#666666"
          borderopacity="1"
          objecttolerance="10"
          gridtolerance="10"
          guidetolerance="10"
          inkscapepageopacity="0"
          inkscapepageshadow="2"
          inkscapewindow-width="1366"
          inkscapewindow-height="710"
          id="namedview903"
          showgrid="false"
          inkscapezoom="0.42703921"
          inkscapecx="379.15719"
          inkscapecy="254.24571"
          inkscapewindow-x="0"
          inkscapewindow-y="30"
          inkscapewindow-maximized="1"
          inkscapecurrent-layer="g909" />
        <g
          inkscapegroupmode="layer"
          inkscapelabel="Image"
          id="g909"
          transform="translate(56.384675,-57.423472)">
          <path
            style={{strokeWidth: 0.32}}
            id="path913" />
        </g>
      </svg>
    </>
  )
}

export default SVGHalftone;