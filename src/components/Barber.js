import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import style from "../styles/style";
import SeeAll from "./SeeAll";
import CommonLinkWithImage from "./CommonLinkWithImage";
import CardBarber from "./CardBarber";
import CommonLinkBarber from "./CommonLinkBarber";
import FixedDataCard from "./FixedDataCard";

const Barber = (props) => {
  const { id } = props.route.params;
  
  const links = FixedDataCard;
  let [data, setData] = useState({});

  useEffect(() => {
    links.filter((value) => {
      if (value.id === id) {
        setData(value);
      }
    });
  }, []);

  return (
    <>
      <ScrollView>
        <Image
          style={style.barber.image}
          source={require("../../assets/modifyz.jpg")}
        />
        <View style={style.barber.container}>
          {
            <View style={{ gap: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                  {data.name}
                </Text>
                <Text style={style.barber.openCloseButton}>Open</Text>
              </View>
              <Text style={{ color: "grey", fontSize: 15 }}>
                {data.address}
              </Text>
              <Text style={{ color: "grey", fontSize: 15 }}>
                {data.rating} ({data.review})
              </Text>
            </View>
          }

          <CommonLinkWithImage data={props} />
          <SeeAll name={"Our Specialist"} data={props} />
          <View style={style.barber.innerContainer}>
            <CardBarber />
          </View>
          <CommonLinkBarber data={props} />
          <SeeAll name={"Our Services"} data={props} />
          <Text style={style.button}>Book Now</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Barber;
