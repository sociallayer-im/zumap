import {
  serializeJubmojiList,
  deserializeJubmojiList,
  succinctSerializeJubmojiList,
  succinctDeserializeJubmojiList,
} from "../../src/util/serialize";
import { Jubmoji } from "../../src/types";

describe("serialization and deserialization should not lose data", () => {
  const testJubmojis: Jubmoji[] = [
    {
      pubKeyIndex: 136,
      sig: "30440220036FD67ABECB833F54D8657A290C7F8385A240B3544769245F4627F64D1ACD390220016A6A8EEE301286B4D44C8D6D994A326436609558F4BD1A0B25F050BC72EE910000",
      msgNonce: 2,
      msgRand: "286393759CEE77902DEF25CC1B565EF2AF57ABD86D0D96A50B2976E0",
      R: '{"x":"2a057736f6a91e7882e7c37eb1a6b913ee1b93b10dd4aa02de5c90b138c42b9","y":"1d21ff3d1456165c014101dde59ffa89ecc9d15c605fe1a60bd4cf0f85cf6365"}',
      T: '{"x":"d33adb78ccc7b287000feac630cfa7a03db1ba789a153c36be1974f8f615b61","y":"29c4410492fdf3ec5443e2bedbcb355bb26d894738af6e6d0eefcd0c4b1229b3"}',
      U: '{"x":"166b7038214682dd4bac67e2bcaf440aa25bbf0cfed26072e8d53114706ba521","y":"6bd6557d936dedafc0a092146ebcd8890f2ca45ff92a521d60ed4d0dee92238"}',
    },
    {
      pubKeyIndex: 201,
      sig: "30440220020CF4AA0C8A2EE10C41016A6069E3604B1F8487C8C6EE95954F5E15E00128200220041576E3149B4CCA5F281B56122100877BEBCDD3F8338DCD574CBC1447CFB3E60407",
      msgNonce: 14,
      msgRand: "17B86CC70F389D4C5BFA44B871F16BCC76521201DF1A69FC10DCE9A6",
      R: '{"x":"284015ef208a86bc5f8710139f6f057ad8f41adc63dce788066b0b25a833f900","y":"15036e10627c6239bdc8d46fa3697b2595b5b15cf69f8d3a7cd3bd9a587219e0"}',
      T: '{"x":"24bd66851554c3d1f86d938780a2a567ddb2f51d4b3d33242c0ce29d6e64688b","y":"c1df608c5ce4fb9eed42f7894a85325458dbddcc7db2374f964398df94ada6b"}',
      U: '{"x":"2648d0c6866b826b5eabbd201df474d0729fc5a848f2a50cbd05585f72c34778","y":"55c17f2b921aa12583c105adea91622d4d63983af6cb662420db325800357e0"}',
    },
    {
      pubKeyIndex: 202,
      sig: "3044022002A087703F291A4180CF72655F7E23A31B351EBD2596CFA0FFE4AD892047B773022002216EAA73F7A159D63F35FFB0F9AF9F249E88EB9C271106F4B41AC16460D9010409",
      msgNonce: 1,
      msgRand: "F4C295A990520C0752458BCF1325FCAA163AABBD3D3593DD0A0021ED",
      R: '{"x":"10206ebeaf5887ef3841eeb499886e825ebb3ff3e9080755fb6307f94971cd3c","y":"140e0254d9ba7f2a73123a9746143839bd7e24a9c45ca9faa817633427257711"}',
      T: '{"x":"25031fac51765f017380120a5bd7a0fc6545ec4009159138ebfb31c5b23e24b6","y":"31a7e79292f79b62e52bbe93ee89ea418d6a1fbde63a7169d089546da6b34e5"}',
      U: '{"x":"aeb8004ca1ce1e38d2a134a50bc9a5f64474c1138bc731d002d82d3183b341a","y":"7e9ebb79d993778729883bb1b734157f7550977ee7bd25e1e4724e1bdba6b60"}',
    },
    {
      pubKeyIndex: 191,
      sig: "304402200304B111AAAC0D9A7E7B3CB679E6A4B974A3A14C65B773951CC46BD1E7BFC6F0022003C90BD36B030B2C54DC64D751A8AABFABC5F66DBCB078FD42BF4312B56323190000",
      msgNonce: 2,
      msgRand: "1D6091116B886622DCB3DF31EAD29B8B35C017483B03EAAF66C72A86",
      R: '{"x":"29ebc228a8591199d28ac836c464fb509a6834ab983efd9ad5cc28e956c4b26e","y":"98b1d29c35a229e626fb98d4b161a1750cd7cf8e75837f4ec04b4a8a7732fd3"}',
      T: '{"x":"358000a94cd8f01015f1fecdbf8860c604a82235c8949b730d9aed12c097f7d","y":"2a10e06ae4d893d53e017c5fc8416ae174c805c2bf4a1cffc429c7d4ff57a15f"}',
      U: '{"x":"66fa329bee2e2d16db242afb97c3338009e1b7b81c1c63841887b78526b6c6c","y":"1ac3db5e5644a6da2e02f0000cab6513a418b2fa0fcebe072a19c742beb48b41"}',
    },
    {
      pubKeyIndex: 129,
      sig: "30440220022A7578D3320779DB44085244F908518A2AEA463CCFEF2E3FD978DF31B8A1BC0220002A5BB8F8965B48037CD08C80327481C4D0C1F3273CD0E125B6F137142EDE9F0000",
      msgNonce: 7,
      msgRand: "B8339AF0A31EECD4067CBCF2E2C4A2186A21A790CCF1FB9A53553AC1",
      R: '{"x":"135f01fbc4ca8e123d590eae8e86142a69bd7e7f31a0087322ae9b26e222bc1b","y":"4ae53803b5e41a6466ba809a809b993ecfa9a0bb43c9eb3a5e712af5db278c8"}',
      T: '{"x":"f0919340a939a43a3bcd03f9d0b6056e724f946126cf51cbed8653d808507f8","y":"d29ccc541352a3e4351f5a22ceb3d54912cfdb591dd2cef609d49dc8eb3b3c6"}',
      U: '{"x":"1514433d472c14f2f19b73632a221a7be586a1f6fa35f0e52ab2808d3f1de9cb","y":"1c1baaaf20c2a07545ea244984719bf5bb438ce132267ed898b1b584136698a9"}',
    },
    {
      pubKeyIndex: 125,
      sig: "3044022003989EDA7412C98270CD6BF32E1C6F46BBD0CF2C5683B586ACDC33E63A237519022004A6867D3A5EDAD127F5B390BCC4B65E2262AA8F52DFFB0F32F56935CB5ECEF80000",
      msgNonce: 3,
      msgRand: "ACB44A1A7F9ADCDF873A61D7417B503A4762DC5D7996CA51D227BACF",
      R: '{"x":"bdc6fd5361cdeca9bcade71748f4cb07bb3a29b1e5a8c5a0e59403f6edabfb3","y":"29aa764e4e4d5b797b1a2f100e8e79cfc0532c546481f3a933fc45a6f7e7940f"}',
      T: '{"x":"11eaa1166ed873e02eae66785b5c7bcc4b98c44442f5dbe1a8c05d0f28f674e3","y":"1b45e19ec89d968f760ebd5f7510114210aedf7c846953df5ed71628917253f4"}',
      U: '{"x":"2b2bf236026db471b47257c117e4fb0768ec7133d9448c2a60dd20ff6ea19861","y":"1dd920476e5da95302fa49c6d9f4ac0797cf87299fc7f6c19f6f0c57670d3ffb"}',
    },
  ];

  test("non succinct serialization works", () => {
    const serialized = serializeJubmojiList(testJubmojis);
    const deserialized = deserializeJubmojiList(serialized);
    expect(deserialized).toEqual(testJubmojis);
  });

  test("succinct serialization works", () => {
    // this test case takes a while as we need to recompute the R, T, U
    const serialized = succinctSerializeJubmojiList(testJubmojis);
    const deserialized = succinctDeserializeJubmojiList(serialized);
    expect(deserialized).toEqual(testJubmojis);
  });
});
