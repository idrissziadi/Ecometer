import React, { useState, useEffect } from "react";
import { Paper, Grid, Typography, Stack } from "@mui/material";
import Drop from "./Drop";

const circleStyle = {
  width: "26px",
  height: "26px",
  borderRadius: "50%",
  backgroundColor: "#003049",
};

const textTitre = {
  fontFamily: "Eudoxus , sans-serif",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "24px",
};

const textValue = {
  fontFamily: "Eudoxus , sans-serif",
  fontWeight: "700",
  fontSize: "20px",
};
const subTextStyle = {
  fontFamily: "Inter , sans-serif",
  fontWeight: "400",
  fontSize: "16px",
};
const EmissionsDirectesCard = () => {
    const [post1, setPost1] = useState({total:0, co2a: 0, cob: 0, ch4: 0, n2o: 0 });
    const [post2, setPost2] = useState({total:0, co2a: 0, cob: 0, ch4: 0, n2o: 0 });
    const [post3, setPost3] = useState({total:0, co2a: 0, cob: 0, ch4: 0, n2o: 0 });
    const [post4, setPost4] = useState({
      total: 0,
      co2a: 0,
      cob: 0,
      ch4: 0,
      n2o: 0,
    });
    const [post5, setPost5] = useState({
      total: 0,
      co2a: 0,
      cob: 0,
      ch4: 0,
      n2o: 0,
    });
  const [isDropVisible, setIsDropVisible] = useState(false);
  const [emissionsList, setEmissionsList] = useState([
    {
      label: "émissions directes des sources fixes de combustion",
      dialogueOptions: [{ label: "Combustibles", value: 1 }],
      selectedOptions: [],
    },
    {
      label: "émissions directes des sources mobiles de combustion",
      dialogueOptions: [{ label: "Combustibles", value: 2 }],
      selectedOptions: [],
    },
    {
      label: "émissions directes des procédés hors énergie",
      dialogueOptions: [
        { label: "Process et émissions fugitives", value: 3 },
      ],
      selectedOptions: [],
    },
    {
      label: "émissions directes fugitives",
      dialogueOptions: [
        { label: "Process et émissions fugitives", value: 4 },
      ],
      selectedOptions: [],
    },
    {
      label: "émission issues de la biomasse (sols et forêts)",
      dialogueOptions: [{ label: "UTCF", value: 5 }],
      selectedOptions: [],
    },
  ]);

  const toggleDrop = () => {
    setIsDropVisible(!isDropVisible);
    console.log(isDropVisible);
  };

  let cob;
  let ch4;
  let n2o;
  let co2a;
  const Data = JSON.parse(localStorage.getItem("ClientBilan"));
  const calculateScopeEmissions = () => {
    Data.emissionPosts.map((element) => {
      switch (element.index) {
        case 1.1:
          cob = element.CO2;
          ch4 = element.CH4;
           n2o = element.N2O;
           co2a = element.emissions - (cob + ch4 + n2o);
          setPost1({ co2a: 0, cob: 0, ch4: 0, n2o: 0});
          break;
        case 1.2:
           cob = element.CO2;
           ch4 = element.CH4;
           n2o = element.N2O;
           co2a = element.emissions - (cob + ch4 + n2o);
          setPost2({ co2a: 0, cob: 0, ch4: 0, n2o: 0});

          break;
        case 1.3:
          cob = element.CO2;
          ch4 = element.CH4;
          n2o = element.N2O;
          co2a = element.emissions - (cob + ch4 + n2o);
          setPost3({ co2a: 0, cob: 0, ch4: 0, n2o: 0 });
          break;
        case 1.4:
          cob = element.CO2;
          ch4 = element.CH4;
          n2o = element.N2O;
          co2a = element.emissions - (cob + ch4 + n2o);
          setPost4({ co2a: 0, cob: 0, ch4: 0, n2o: 0 });
          break;
        case 1.5:
          cob = element.CO2;
          ch4 = element.CH4;
          n2o = element.N2O;
          co2a = element.emissions - (cob + ch4 + n2o);
          setPost5({ co2a: 0, cob: 0, ch4: 0, n2o: 0 });
          break;
        default:
          break;
      }
    });
  };

  useEffect(() => {
    calculateScopeEmissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Paper
      elevation={3}
      sx={{
        paddingTop: "25px",
        paddingBottom: "25px",
        paddingLeft: "30px",
        paddingRight: "30px",
        borderRadius: "15px",
        background: "#D9D9D9",
      }}
    >
      <Grid container justifyContent="space-between">
        <Grid item md={6} xs={12}>
          <Grid container>
            <Grid item md={1} xs={2}>
              <div style={circleStyle}></div>
            </Grid>
            <Grid item md={11} xs={10}>
              <Typography style={textTitre}>
                Total Emissions directes
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <Grid container direction={"row-reverse"}>
            <Grid item md={1} xs={2}>
              <Drop onClick={toggleDrop} />
            </Grid>

            <Grid item md={11} xs={10}>
              <Grid justifyContent={"start"} alignContent={"start"}>
                <Typography
                  style={textValue}
                  sx={{
                    textAlign: "right",
                    marginRight: { md: "20px", xs: "10px" },
                  }}
                >
                  {post1.total} kgCO2e
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        {isDropVisible && (
          <Stack direction="column" spacing={1} marginTop={{ md: "25px" }}>
            {emissionsList.map((item, index) => (
              <React.Fragment key={index}>
                <Typography style={subTextStyle}>{item.label}</Typography>
                <Grid container>
                  <Grid item md={1.8}>
                    <Grid container spacing={1}>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "400",
                            fontSize: "14px",
                          }}
                        >
                          {" "}
                          CO2
                        </Typography>
                      </Grid>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "700",
                            fontSize: "16px",
                          }}
                        >
                          {}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={1.8}>
                    <Grid container spacing={1}>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "400",
                            fontSize: "14px",
                          }}
                        >
                          {" "}
                          CH4
                        </Typography>
                      </Grid>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "700",
                            fontSize: "16px",
                          }}
                        >
                          {" "}
                          {item.value.ch4}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={1.8}>
                    <Grid container spacing={1}>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "400",
                            fontSize: "14px",
                          }}
                        >
                          {" "}
                          N2O
                        </Typography>
                      </Grid>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "700",
                            fontSize: "16px",
                          }}
                        >
                          {" "}
                          {item.value.n2o}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={1.8}>
                    <Grid container spacing={1}>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "400",
                            fontSize: "14px",
                          }}
                        >
                          {" "}
                          CO2b
                        </Typography>
                      </Grid>
                      <Grid item md={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter ,sans-serif",
                            fontWeight: "700",
                            fontSize: "16px",
                          }}
                        >
                          {" "}
                          {item.value.cob}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </React.Fragment>
            ))}
          </Stack>
        )}
      </Grid>
    </Paper>
  );
};

export default EmissionsDirectesCard;
