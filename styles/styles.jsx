import React from "react";
import { StyleSheet } from "react-native/types";
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Flex&display=swap" rel="stylesheet"></link>




export defaulf StyleSheet.create({

    default: {
        regular: {
          fontFamily: "sans-serif",
          fontWeight: "normal"
        },
        medium: {
          fontFamily: "sans-serif-medium",
          fontWeight: "normal"
        },
        light: {
          fontFamily: "sans-serif-light",
          fontWeight: "normal"
        },
        thin: {
          fontFamily: "sans-serif-thin",
          fontWeight: "bold"
        }
      }


})

function font(){
    return (
        @font-face {
            font-family: roboto-flex;
            src: url(../fonts/roboto-flex.ttf);
        
        }
    )
}