var Amadeus = require('amadeus');
import { JP, US } from "./jp_json"

export default function handler(req, res) {
  // console.log(JP);
  // console.log(US);
  const { to, from } = req.query
  const checkCountry = from || "US"
  const response = {}
  if (!!JP) {
    response.governmentSiteLink = JP.dataSources.governmentSiteLink;
    response.ban = {}
    response.ban.entryBan = JP.areaAccessRestriction.entry.ban;
    response.ban.bannedForYou = false;
    // response.ban.text = JP.areaAccessRestriction.entry.text;
    if (JP.areaAccessRestriction.entry.bannedArea) {
      JP.areaAccessRestriction.entry.bannedArea.forEach((country) => {
        if (country.iataCode == checkCountry) response.ban.bannedForYou = true;
      });
    };
    
    response.diseaseTesting = {
      "isRequired": JP.areaAccessRestriction.diseaseTesting.isRequired,
      "when": JP.areaAccessRestriction.diseaseTesting.when
    };
    
    response.quarantine = {
      // text: JP.areaAccessRestriction.quarantineModality.text,
      quarantineType: JP.areaAccessRestriction.quarantineModality.quarantineType,
      duration: JP.areaAccessRestriction.quarantineModality.duration,
      requiredForYou: false
    }
    
    if (JP.areaAccessRestriction.quarantineModality.quarantineOnArrivalAreas) {
      JP.areaAccessRestriction.quarantineModality.quarantineOnArrivalAreas.forEach((country) => {
        if (country.iataCode == checkCountry) response.quarantine.requiredForYou = true;
      });
    };
    

    
  }
  res.status(200).json(response)


  // IF USING AMADEUS SDK
  // var amadeus = new Amadeus({
  //   clientId: 'yI4chDhqr9o6VUFvgTDJIMGsF0hRatrC',
  //   clientSecret: '3t4zl2sBqQ9Ekq3y'
  // });

  // amadeus.dutyOfCare.diseases.covid19AreaReport.get({ countryCode: to }).then(
  //   (JSON) => {
  //     // console.log(response.data)
  //     const DATA = JSON.data
  //     const checkCountry = from || "US"
  //     const response = {}
  //     if (!!DATA) {
  //       response.governmentSiteLink = DATA.dataSources.governmentSiteLink;
  //       response.ban = {}
  //       response.ban.entryBan = DATA.areaAccessRestriction.entry.ban;
  //       response.ban.bannedForYou = false;
  //       // response.ban.text = DATA.areaAccessRestriction.entry.text;
  //       if (DATA.areaAccessRestriction.entry.bannedArea) {
  //         DATA.areaAccessRestriction.entry.bannedArea.forEach((country) => {
  //           if (country.iataCode == checkCountry) response.ban.bannedForYou = true;
  //         });
  //       };
        
  //       response.diseaseTesting = {
  //         "isRequired": DATA.areaAccessRestriction.diseaseTesting.isRequired,
  //         "when": DATA.areaAccessRestriction.diseaseTesting.when
  //       };
        
  //       response.quarantine = {
  //         // text: DATA.areaAccessRestriction.quarantineModality.text,
  //         quarantineType: DATA.areaAccessRestriction.quarantineModality.quarantineType,
  //         duration: DATA.areaAccessRestriction.quarantineModality.duration,
  //         requiredForYou: false
  //       }
        
  //       if (DATA.areaAccessRestriction.quarantineModality.quarantineOnArrivalAreas) {
  //         DATA.areaAccessRestriction.quarantineModality.quarantineOnArrivalAreas.forEach((country) => {
  //           if (country.iataCode == checkCountry) response.quarantine.requiredForYou = true;
  //         });
  //       };
        

  //       response.changed = "changed";
  //     }
  //     res.status(200).json(response)


  //   }
  //   ).catch((responseError) => {
  //     console.log(responseError.code);
  //     res.status(401).json(responseError)
  // });
}