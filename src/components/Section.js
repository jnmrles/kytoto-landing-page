import React from "react"
import styled from "styled-components"
import Wave from "./Wave"
import Lottie from "react-lottie"

const SectionGroup = styled.div`
  ${"" /* background: url(${props => props.image}); */}
  height: 1000px;
  background-color: black;

  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
  @media (max-width: 800px) {
    height: 1100px;
    text-align: center;

    background-repeat: no-repeat;
    background-position: center;
  }
`

const SectionLogo = styled.div`
  align-self: end;
  width: 128px;
  height: 200px;

  margin: 0 auto 0 auto;
`

const SectionTitleGroup = styled.div`
  margin: -50px 40px;

  text-align: center;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 720px) {
    font-size: 40px;
  }
`

const SectionText = styled.p`
  color: white;
  font-weight: 200px;
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -10px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -10px;
  transform: rotate(180deg);
`

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveTop>
      <Wave />
    </WaveTop>
    <WaveBottom>
      <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none">
        <path fill="#13131c">
          <animate
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="10s"
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

            M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;"
          />
        </path>
      </svg>
    </WaveBottom>
    {/* <SectionLogo src={props.logo} /> */}
    <SectionLogo>
      {" "}
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: {
            v: "5.5.10",
            fr: 30,
            ip: 0,
            op: 60,
            w: 300,
            h: 300,
            nm: "gauge with plus badge",
            ddd: 0,
            assets: [],
            layers: [
              {
                ddd: 0,
                ind: 1,
                ty: 4,
                nm: "Shape",
                sr: 1,
                ks: {
                  o: { a: 0, k: 100, ix: 11 },
                  r: { a: 0, k: 0, ix: 10 },
                  p: { a: 0, k: [180.725, 180.374, 0], ix: 2 },
                  a: { a: 0, k: [0, 0, 0], ix: 1 },
                  s: {
                    a: 1,
                    k: [
                      {
                        i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                        o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                        t: 10,
                        s: [100, 100, 100],
                      },
                      {
                        i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                        o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                        t: 20,
                        s: [80, 80, 100],
                      },
                      { t: 30, s: [100, 100, 100] },
                    ],
                    ix: 6,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [10.85, 0],
                              [0, -10.85],
                              [-10.8, 0],
                              [0, 10.8],
                            ],
                            o: [
                              [-10.8, 0],
                              [0, 10.8],
                              [10.85, 0],
                              [0, -10.85],
                            ],
                            v: [
                              [-0.025, -19.625],
                              [-19.624, 0.025],
                              [-0.025, 19.625],
                              [19.626, 0.025],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ind: 1,
                        ty: "sh",
                        ix: 2,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [1.65, 0],
                              [0, 0],
                              [0, 0],
                              [1.65, 0],
                              [0, 1.65],
                              [0, 0],
                              [0, 0],
                              [0, 1.7],
                              [-1.65, 0],
                              [0, 0],
                              [0, 0],
                              [-1.65, 0],
                              [0, -1.65],
                              [0, 0],
                              [0, 0],
                              [0, -1.65],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 1.65],
                              [-1.65, 0],
                              [0, 0],
                              [0, 0],
                              [-1.65, 0],
                              [0, -1.65],
                              [0, 0],
                              [0, 0],
                              [0, -1.65],
                              [1.65, 0],
                              [0, 0],
                              [0, 0],
                              [1.65, 0],
                              [0, 1.7],
                            ],
                            v: [
                              [7.926, 2.975],
                              [2.975, 2.975],
                              [2.975, 7.975],
                              [-0.025, 10.975],
                              [-3.025, 7.975],
                              [-3.025, 2.975],
                              [-7.975, 2.975],
                              [-10.975, -0.025],
                              [-7.975, -2.975],
                              [-3.025, -2.975],
                              [-3.025, -7.975],
                              [-0.025, -10.975],
                              [2.975, -7.975],
                              [2.975, -2.975],
                              [7.926, -2.975],
                              [10.926, -0.025],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Path 2",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ty: "mm",
                        mm: 1,
                        nm: "Merge Paths 1",
                        mn: "ADBE Vector Filter - Merge",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [
                            0.8784313725490196,
                            0.8196078431372549,
                            0.8196078431372549,
                            1,
                          ],
                          ix: 4,
                        },
                        o: { a: 0, k: 100, ix: 5 },
                        r: 1,
                        bm: 0,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [0, 0], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "Shape",
                    np: 4,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 60,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 2,
                ty: 4,
                nm: "Shape",
                sr: 1,
                ks: {
                  o: { a: 0, k: 100, ix: 11 },
                  r: { a: 0, k: 0, ix: 10 },
                  p: { a: 0, k: [149.9, 150, 0], ix: 2 },
                  a: { a: 0, k: [0, 0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100, 100], ix: 6 },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [27.7, 0],
                              [0, -27.7],
                              [-27.7, 0],
                              [-4.4, 1.3],
                              [1.15, 1.9],
                              [3.35, 0],
                              [0, 24.4],
                              [-24.4, 0],
                              [0, -24.4],
                              [0.6, -2.95],
                              [-1.5, -1.6],
                              [0, 4.6],
                            ],
                            o: [
                              [-27.7, 0],
                              [0, 27.75],
                              [4.85, 0],
                              [-1.6, -1.5],
                              [-3.15, 0.7],
                              [-24.4, 0],
                              [0, -24.4],
                              [24.4, 0],
                              [0, 3.15],
                              [1.9, 1.1],
                              [1.2, -4.2],
                              [0, -27.7],
                            ],
                            v: [
                              [0, -50.25],
                              [-50.25, 0],
                              [0, 50.25],
                              [13.9, 48.25],
                              [9.8, 43.15],
                              [0, 44.25],
                              [-44.25, 0],
                              [0, -44.25],
                              [44.25, 0],
                              [43.3, 9.2],
                              [48.45, 13.3],
                              [50.25, 0],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ind: 1,
                        ty: "sh",
                        ix: 2,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [20.69, 0],
                              [0, -20.48],
                              [-1.66, 0],
                              [-0.04, 0],
                              [-0.04, 0],
                              [0, 0],
                              [0, 1.66],
                              [1.65, 0],
                              [0, 0],
                              [-14.98, 1.4],
                              [0, 0],
                              [-1.66, 0],
                              [0, 1.65],
                              [0, 0],
                              [0, -16.17],
                              [-1.65, 0],
                              [0, 1.66],
                            ],
                            o: [
                              [-20.69, 0],
                              [0, 1.66],
                              [0.03, 0],
                              [0.03, 0],
                              [0, 0],
                              [1.65, 0],
                              [0, -1.65],
                              [0, 0],
                              [1.44, -14.8],
                              [0, 0],
                              [0, 1.65],
                              [1.65, 0],
                              [0, 0],
                              [15.98, 1.49],
                              [0, 1.66],
                              [1.66, 0],
                              [0, -20.48],
                            ],
                            v: [
                              [0.005, -36.286],
                              [-37.515, 0.864],
                              [-34.515, 3.864],
                              [-34.405, 3.864],
                              [-34.295, 3.864],
                              [-24.295, 3.864],
                              [-21.295, 0.864],
                              [-24.295, -2.126],
                              [-31.375, -2.126],
                              [-2.995, -30.136],
                              [-2.995, -23.136],
                              [0.005, -20.136],
                              [3.005, -23.136],
                              [3.005, -30.136],
                              [31.525, 0.864],
                              [34.525, 3.864],
                              [37.525, 0.864],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Path 2",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ty: "mm",
                        mm: 1,
                        nm: "Merge Paths 1",
                        mn: "ADBE Vector Filter - Merge",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [
                            0.2980392156862745,
                            0.9725490196078431,
                            0.3411764705882353,
                            1,
                          ],
                          ix: 4,
                        },
                        o: { a: 0, k: 100, ix: 5 },
                        r: 1,
                        bm: 0,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [0, 0], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "Shape",
                    np: 4,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 60,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 3,
                ty: 4,
                nm: "Shape",
                sr: 1,
                ks: {
                  o: { a: 0, k: 100, ix: 11 },
                  r: {
                    a: 1,
                    k: [
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        t: 10,
                        s: [0],
                      },
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        t: 25,
                        s: [56],
                      },
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        t: 28,
                        s: [56],
                      },
                      { t: 43, s: [0] },
                    ],
                    ix: 10,
                  },
                  p: { a: 0, k: [150, 170, 0], ix: 2 },
                  a: { a: 0, k: [0.1, 12.4, 0], ix: 1 },
                  s: { a: 0, k: [100, 100, 100], ix: 6 },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [3.2, 1.2],
                              [0, 0],
                              [1.65, 0],
                              [0, -1.65],
                              [0, 0],
                              [0, -3.7],
                              [-4.8, 0],
                              [-1.5, 2],
                              [0, 2.85],
                            ],
                            o: [
                              [0, 0],
                              [0, -1.7],
                              [-1.65, 0],
                              [0, 0],
                              [-3.3, 1.25],
                              [0, 4.8],
                              [2.75, 0],
                              [1.31, -1.75],
                              [-0.15, -3.55],
                            ],
                            v: [
                              [3, 4.3],
                              [3, -18.1],
                              [0, -21.1],
                              [-3, -18.1],
                              [-3, 4.3],
                              [-8.7, 12.4],
                              [0, 21.1],
                              [6.7, 17.85],
                              [8.7, 12.05],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ind: 1,
                        ty: "sh",
                        ix: 2,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [2.05, 0],
                              [0, 2.05],
                              [-2.05, 0],
                              [0, -2],
                            ],
                            o: [
                              [-2.05, 0],
                              [0, -2],
                              [2.05, 0],
                              [0, 2.05],
                            ],
                            v: [
                              [0, 16.1],
                              [-3.7, 12.4],
                              [0, 8.75],
                              [3.7, 12.4],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Path 2",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ty: "mm",
                        mm: 1,
                        nm: "Merge Paths 1",
                        mn: "ADBE Vector Filter - Merge",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [
                            0.8784313725490196,
                            0.8196078431372549,
                            0.8196078431372549,
                            1,
                          ],
                          ix: 4,
                        },
                        o: { a: 0, k: 100, ix: 5 },
                        r: 1,
                        bm: 0,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [0, 0], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "Shape",
                    np: 4,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 60,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 4,
                ty: 4,
                nm: "background",
                sr: 1,
                ks: {
                  o: { a: 0, k: 0, ix: 11 },
                  r: { a: 0, k: 0, ix: 10 },
                  p: { a: 0, k: [150, 150, 0], ix: 2 },
                  a: { a: 0, k: [7, -1, 0], ix: 1 },
                  s: { a: 0, k: [156.25, 156.25, 100], ix: 6 },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ty: "rc",
                        d: 1,
                        s: { a: 0, k: [192, 192], ix: 2 },
                        p: { a: 0, k: [0, 0], ix: 3 },
                        r: { a: 0, k: 0, ix: 4 },
                        nm: "Rectangle Path 1",
                        mn: "ADBE Vector Shape - Rect",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: { a: 0, k: [0.97, 0.6, 0.6, 1], ix: 4 },
                        o: { a: 0, k: 100, ix: 5 },
                        r: 1,
                        bm: 0,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: { a: 0, k: [7, -1], ix: 2 },
                        a: { a: 0, k: [0, 0], ix: 1 },
                        s: { a: 0, k: [100, 100], ix: 3 },
                        r: { a: 0, k: 0, ix: 6 },
                        o: { a: 0, k: 100, ix: 7 },
                        sk: { a: 0, k: 0, ix: 4 },
                        sa: { a: 0, k: 0, ix: 5 },
                        nm: "Transform",
                      },
                    ],
                    nm: "Rectangle 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 150.000006109625,
                st: 0,
                bm: 0,
              },
            ],
            markers: [],
          },
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
      />
    </SectionLogo>

    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
      <a
        className="twitter-timeline"
        href="https://twitter.com/TwitterDev"
        data-width="400"
        data-height="400"
      >
        Tweets by @TwitterDev
      </a>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section
