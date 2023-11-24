const express = require("express");
const puppeteer = require("puppeteer");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});

app.get("/api", async (req, res) => {
  try {
    const data = await scrapeProduct(
      "https://rate.am/en/armenian-dram-exchange-rates/exchange-points/cash/retail"
    );
    res.json({
      exchangeData: data, // Возвращаем результат скрапинга как часть ответа
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Exchange rate

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const extractData = async (selector) => {
    const [element] = await page.$x(selector);
    if (element) {
      const property = await element.getProperty("textContent");
      const value = await property.jsonValue();
      const rateChange = value
        .split("\n")
        .filter((element) => element.length > 2);
      if (rateChange[0].length <= 3) {
        rateChange.shift();
      }
      return {
        name: rateChange[0],
        dataUpDate: rateChange[1],
        buyUSA: rateChange[2],
        sellUSA: rateChange[3],
        buyEUR: rateChange[4],
        sellEUR: rateChange[5],
        buyRUB: rateChange[6],
        sellRUB: rateChange[7],
        buyGEL: rateChange[8],
        sellGEL: rateChange[9],
      };
    }
    return {};
  };

  const vasMasivAll = await extractData(
    '//*[@id="da92a024-19da-4555-bec7-dc4519ed70f3"]'
  );
  const agora5MasivAll = await extractData(
    '//*[@id="81bff146-1754-41b6-b10f-e7edde2d3bd5"]'
  );
  const agoraAll = await extractData(
    '//*[@id="6f330706-0bbd-4dbd-a375-5da8ec6608a3"]'
  );
  const KomitasErityannerAll = await extractData(
    '//*[@id="01a95b8e-b473-4236-a7da-0b91d5acbd8a"]'
  );
  const ZovqGayiPostAll = await extractData(
    '//*[@id="4723bd8d-ac01-4a72-a5c4-dd1de88ad2b2"]'
  );
  const GuavaAll = await extractData(
    '//*[@id="540123e5-0a1d-4e77-a3d7-4bab1ea3ec25"]'
  );
  const GuavaArmavirAll = await extractData(
    '//*[@id="21cfe3f3-d24a-4581-a114-f68398b07a58"]'
  );
  const RaykomVoskeGetakAll = await extractData(
    '//*[@id="db1a2ad1-686e-4946-82ad-50e948642a23"]'
  );
  const SanFoodkAll = await extractData(
    '//*[@id="acb2f42b-d7d5-487d-a68d-b626f4c434e5"]'
  );
  const ZovqKrivoAll = await extractData(
    '//*[@id="188f3d23-b32b-4cb0-b241-c2b093315197"]'
  );
  const MgDavtashenAll = await extractData(
    '//*[@id="78a9a5d7-d368-42f7-ad2f-0f4bb7be8b1a"]'
  );

  const ZovqMasivAll = await extractData(
    '//*[@id="f9ec7867-bc60-43cb-a51e-89e09b93cd06"]'
  );

  const CenterHotelAll = await extractData(
    '//*[@id="2f8be6fc-e209-4ca9-82ab-593fca923a76"]'
  );

  const ArevTMasivAll = await extractData(
    '//*[@id="b38cae18-fe13-431e-8897-441959a9b509"]'
  );

  const ArevFMasivAll = await extractData(
    '//*[@id="2a96e59d-17e6-495d-8d0b-b8fb34a63269"]'
  );

  const TiranMetaksAll = await extractData(
    '//*[@id="1d7d7330-cf5b-41f1-b4b4-51cbfaee21bc"]'
  );

  const ZovqDavitBekAll = await extractData(
    '//*[@id="11ee6c85-7347-4a85-9622-bfa737db53d3"]'
  );

  const GurveriaTumanyanAll = await extractData(
    '//*[@id="2a6abd36-7a06-4e70-a94f-bac33eca313a"]'
  );

  const EvnCityKasyanAll = await extractData(
    '//*[@id="2cb6fa8f-2d6f-421f-b9d7-373e94505185"]'
  );
  const OazisAvanAringAll = await extractData(
    '//*[@id="752bb058-a59e-48f4-876e-657f75ff8217"]'
  );
  const KomitasFmMkAll = await extractData(
    '//*[@id="b014be21-7ce3-458b-934c-4d9df1813636"]'
  );

  const KomitasVTAll = await extractData(
    '//*[@id="84180a37-b837-489c-9590-297d1838bb36"]'
  );

  const AvanAringAll = await extractData(
    '//*[@id="42825346-48dd-4974-b3b6-6400e98c8091"]'
  );
  const MalatyaShukaAll = await extractData(
    '//*[@id="f8a4c5a2-071d-4e95-b9be-bc7b953e2dba"]'
  );

  const MalatyaVoskuShukaAll = await extractData(
    '//*[@id="56b15e8f-e630-4afd-a50e-9ca9b1d0e837"]'
  );

  const EvnTigranmecTTAll = await extractData(
    '//*[@id="53949ee2-8746-46dc-b3b1-fa6a1eb93353"]'
  );

  const KasyanTAll = await extractData(
    '//*[@id="f2f8a13f-f954-4166-afae-369edf510e9c"]'
  );

  const MashtocFTAAll = await extractData(
    '//*[@id="9bc0d165-d455-4ff0-b132-0f26126d75bf"]'
  );
  const YarmrkaMalatyaAll = await extractData(
    '//*[@id="2e6f09bb-e1c9-42f4-8ce3-03aadc567808"]'
  );
  const ZovqAmiryanAll = await extractData(
    '//*[@id="bced18a4-6a80-4ce1-a8fa-da8ae02f63b3"]'
  );
  const GnuniOneAll = await extractData(
    '//*[@id="474ecb38-ab0a-404e-84f2-5d8ff48f5450"]'
  );
  const HrachyaQocharAll = await extractData(
    '//*[@id="e7666f86-765d-479d-8d1d-2d101df2d551"]'
  );
  const LevonAvanesyanAll = await extractData(
    '//*[@id="8d5740d7-1c62-439a-97b9-782745f4b6d2"]'
  );
  const KanachDraxtAll = await extractData(
    '//*[@id="788ae2e8-0e00-427d-b587-1ad633fc146f"]'
  );
  const ImperiaPlazaAll = await extractData(
    '//*[@id="af444188-d475-4fc4-8fe1-8f19e8059cba"]'
  );
  const ErebuniAll = await extractData(
    '//*[@id="cd98143c-94ee-4434-8cdb-323b9fc88ad8"]'
  );
  const HATFaruAll = await extractData(
    '//*[@id="526ef59f-b025-4f85-8546-42baf23ced63"]'
  );
  const KarineAraqelyanAll = await extractData(
    '//*[@id="a9122e50-9119-4973-ad11-8d611be0fffc"]'
  );
  const TigranMecTT = await extractData(
    '//*[@id="96da1a3c-883d-4f01-bff8-88032dc4a172"]'
  );
  const VwgaWoldAll = await extractData(
    '//*[@id="a942e2e3-6bcc-4096-a118-f64ad74de4e9"]'
  );

  const ExchangeMarketManr = [
    vasMasivAll,
    agora5MasivAll,
    agoraAll,
    KomitasErityannerAll,
    ZovqGayiPostAll,
    GuavaAll,
    GuavaArmavirAll,
    RaykomVoskeGetakAll,
    SanFoodkAll,
    ZovqKrivoAll,
    MgDavtashenAll,
    ZovqMasivAll,
    CenterHotelAll,
    ArevTMasivAll,
    ArevFMasivAll,
    TiranMetaksAll,
    ZovqDavitBekAll,
    GurveriaTumanyanAll,
    EvnCityKasyanAll,
    OazisAvanAringAll,
    KomitasFmMkAll,
    KomitasVTAll,
    AvanAringAll,
    MalatyaShukaAll,
    MalatyaVoskuShukaAll,
    EvnTigranmecTTAll,
    KasyanTAll,
    MashtocFTAAll,
    YarmrkaMalatyaAll,
    ZovqAmiryanAll,
    GnuniOneAll,
    HrachyaQocharAll,
    LevonAvanesyanAll,
    KanachDraxtAll,
    ImperiaPlazaAll,
    ErebuniAll,
    HATFaruAll,
    KarineAraqelyanAll,
    TigranMecTT,
    VwgaWoldAll,
  ];

  await browser.close();

  console.log(ExchangeMarketManr);

  return ExchangeMarketManr;
}

scrapeProduct(
  "https://rate.am/en/armenian-dram-exchange-rates/exchange-points/cash/retail"
);
