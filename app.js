$(document).ready(function () {
  console.log("script loaded");
  var response = [
    {
      id: 70,
      firstName: "Monthro",
      lastName: "Ockerman",
      email: "GGriffin@vestibulum.gov",
      phone: "(919)442-1276",
      address: { streetAddress: "131 Dolor Rd", city: "Fort Mill", state: "WI", zip: "55469" },
      description:
        "hendrerit tempor magna aliquam neque libero ipsum mattis tempor vestibulum morbi magna vestibulum elit molestie magna porta non nunc neque pulvinar donec eros sit orci sed amet egestas malesuada libero lacus lacus",
    },
    {
      id: 45,
      firstName: "Emir",
      lastName: "Alarie",
      email: "DMcnally@suspendisse.net",
      phone: "(950)029-5057",
      address: { streetAddress: "2140 Facilisis Dr", city: "Bradford", state: "TX", zip: "31463" },
      description:
        "malesuada ante lacus magna tincidunt pulvinar etiam mi sed aliquam adipiscing curabitur vitae dolor massa curabitur vitae sagittis sollicitudin augue morbi id velit tortor consectetur scelerisque in mattis et velit consectetur aliquam",
    },
    {
      id: 41,
      firstName: "Jiby",
      lastName: "Friend",
      email: "YSturm@amet.gov",
      phone: "(195)073-0780",
      address: { streetAddress: "1054 Egestas Dr", city: "Hagerstown", state: "OH", zip: "96984" },
      description:
        "elementum aliquam mattis hendrerit sit etiam dolor non non nullam elit risus tincidunt rutrum magna donec malesuada massa convallis ante mattis pharetra massa vitae vitae tortor porttitor amet sed fringilla tincidunt sit",
    },
    {
      id: 480,
      firstName: "Derek",
      lastName: "Price",
      email: "ZRearick@eget.gov",
      phone: "(294)715-7034",
      address: {
        streetAddress: "3246 Porttitor Rd",
        city: "Indianapolis",
        state: "MO",
        zip: "25586",
      },
      description:
        "sagittis massa neque lectus magna vestibulum vestibulum tortor eros sit amet pretium at amet curabitur elit quis sed molestie tortor nec vestibulum velit lectus convallis porta risus vestibulum aliquam tellus odio dolor",
    },
    {
      id: 560,
      firstName: "Bernadette",
      lastName: "Madison",
      email: "ACarpenter@pulvinar.org",
      phone: "(423)687-5871",
      address: { streetAddress: "7839 Id Ave", city: "Bellevue", state: "CA", zip: "16879" },
      description:
        "suspendisse magna massa massa mi odio odio massa tincidunt sed consequat ac consectetur pretium pulvinar scelerisque quis amet tempor elementum aliquam magna odio sapien neque sit pharetra velit non etiam pretium consectetur",
    },
    {
      id: 534,
      firstName: "Ernie",
      lastName: "Albers",
      email: "LWuertz@nullam.io",
      phone: "(789)751-3826",
      address: {
        streetAddress: "5861 Facilisis St",
        city: "Vero Beach",
        state: "WY",
        zip: "29905",
      },
      description:
        "tortor tempor ipsum lacus tortor turpis lectus lorem vitae egestas porttitor placerat porta neque hendrerit sit non ipsum risus quis magna eget aliquam tortor massa risus convallis dolor pretium ac lacus dolor",
    },
    {
      id: 677,
      firstName: "Truefelia",
      lastName: "Jezak",
      email: "RChamberlain@lectus.gov",
      phone: "(228)246-9320",
      address: { streetAddress: "790 Turpis Rd", city: "Loves Park", state: "MN", zip: "24204" },
      description:
        "vestibulum amet nullam pharetra sed lacus lorem elementum consequat et tortor mi magna porttitor id adipiscing ac aenean amet et tincidunt consectetur lacus et pulvinar eros lorem donec facilisis in adipiscing nunc",
    },
    {
      id: 190,
      firstName: "Mickey",
      lastName: "Mcglaughlin",
      email: "LSwanson@at.io",
      phone: "(339)041-0043",
      address: { streetAddress: "8702 Aliquam St", city: "Lynchburg", state: "OK", zip: "44871" },
      description:
        "lacus sollicitudin lacus libero id magna sed facilisis pulvinar turpis ipsum tempor lorem vitae fringilla sit amet aenean rutrum id nec sed orci elementum nullam nec ipsum ipsum tellus amet elementum vitae",
    },
    {
      id: 392,
      firstName: "Melina",
      lastName: "Mislang",
      email: "MDelellis@odio.com",
      phone: "(965)683-2161",
      address: { streetAddress: "6601 Hendrerit Rd", city: "Houston", state: "ME", zip: "21098" },
      description:
        "tortor ipsum vestibulum pulvinar massa pulvinar nunc elementum lorem elementum curabitur magna tortor amet nec aliquam sollicitudin et quis tincidunt vitae massa sit sed lorem aliquam amet convallis amet etiam amet tortor",
    },
    {
      id: 791,
      firstName: "Aman",
      lastName: "Faurest",
      email: "SHobbs@placerat.ly",
      phone: "(141)442-4899",
      address: { streetAddress: "5830 Neque Ct", city: "New York", state: "SC", zip: "35615" },
      description:
        "scelerisque dolor lacus tincidunt et tortor aliquam lacus consequat molestie vitae suspendisse lorem eget sed pulvinar et ipsum turpis pulvinar morbi quis scelerisque mi sit velit pulvinar scelerisque mattis sit mattis nec",
    },
    {
      id: 120,
      firstName: "Erma",
      lastName: "Schneider",
      email: "IEseltine@tortor.ly",
      phone: "(466)280-9169",
      address: { streetAddress: "960 Tincidunt St", city: "San Diego", state: "DE", zip: "78379" },
      description:
        "magna adipiscing sed malesuada donec amet lacus odio pretium eros etiam ante curabitur vestibulum fringilla dolor pulvinar mattis pulvinar adipiscing suspendisse ac malesuada convallis magna malesuada convallis curabitur pretium scelerisque dolor vel",
    },
    {
      id: 834,
      firstName: "Loyd",
      lastName: "Wahl",
      email: "FSholtz@elementum.io",
      phone: "(333)607-8562",
      address: { streetAddress: "5323 Sagittis St", city: "Vancouver", state: "RI", zip: "83744" },
      description:
        "amet consectetur tempor sed porta rutrum velit non dolor porta amet sed ac morbi libero mattis turpis sit porttitor malesuada curabitur vitae tortor odio sagittis sit vestibulum tortor eros sagittis amet dolor",
    },
    {
      id: 303,
      firstName: "Colleen",
      lastName: "Fergus",
      email: "FChelette@sed.net",
      phone: "(704)217-0713",
      address: { streetAddress: "7338 Amet Rd", city: "Bloomingdale", state: "NH", zip: "56718" },
      description:
        "morbi at sollicitudin sit lacus tincidunt eget rutrum at etiam convallis pretium sed scelerisque vestibulum suspendisse at massa ipsum tempor at quis placerat dui adipiscing nec sit aliquam tortor adipiscing at non",
    },
    {
      id: 629,
      firstName: "Kavita",
      lastName: "Altermatt",
      email: "PMoser@dolor.com",
      phone: "(491)330-8992",
      address: { streetAddress: "3809 Pulvinar Dr", city: "Dunn", state: "AL", zip: "11858" },
      description:
        "donec magna facilisis mattis odio facilisis pulvinar ipsum vestibulum et vestibulum odio odio elit suspendisse massa orci odio risus non tempor ac id ipsum suspendisse vel pulvinar lacus risus rutrum eros placerat",
    },
    {
      id: 396,
      firstName: "John",
      lastName: "Sanvick",
      email: "JCurl@sit.ly",
      phone: "(221)177-6405",
      address: { streetAddress: "4758 Molestie Dr", city: "Bellevue", state: "MT", zip: "82629" },
      description:
        "pretium fringilla non placerat sit elementum sagittis mattis id velit pretium magna facilisis eros lacus magna sapien tortor sed curabitur dolor massa tincidunt etiam id vel mattis amet donec sit scelerisque sit",
    },
    {
      id: 888,
      firstName: "Norma",
      lastName: "Settle",
      email: "JKovach@sollicitudin.gov",
      phone: "(349)830-9982",
      address: { streetAddress: "459 Massa St", city: "Boulder", state: "HI", zip: "79290" },
      description:
        "adipiscing id ac tellus egestas augue ac porta velit morbi eros orci mi egestas sed rutrum magna molestie lacus mattis mattis tempor amet et id porttitor dolor sit aenean consequat lorem orci",
    },
    {
      id: 76,
      firstName: "Ron",
      lastName: "Coggins",
      email: "AMisoda@magna.ly",
      phone: "(804)028-5426",
      address: { streetAddress: "4078 Facilisis Ct", city: "Port Ewen", state: "CT", zip: "83653" },
      description:
        "velit molestie mattis scelerisque consequat tortor libero rutrum vestibulum neque sit amet sed massa at sit vitae hendrerit lacus magna dolor hendrerit massa non nec ac quis sapien sollicitudin magna eros tincidunt",
    },
    {
      id: 120,
      firstName: "Denise",
      lastName: "Malo",
      email: "VMahajan@tellus.org",
      phone: "(402)963-0232",
      address: { streetAddress: "8420 Sit Ave", city: "Long Beach", state: "DE", zip: "67701" },
      description:
        "risus fringilla non sed egestas vel lectus at mattis lorem tortor aenean vel lacus vestibulum velit eget morbi etiam tincidunt tincidunt non consectetur fringilla amet lacus hendrerit vestibulum lectus amet pharetra amet",
    },
    {
      id: 240,
      firstName: "Kosta",
      lastName: "Shrestha",
      email: "WChristiansen@id.net",
      phone: "(661)020-1804",
      address: { streetAddress: "3452 Turpis Ct", city: "Kalamazoo", state: "ID", zip: "88438" },
      description:
        "nec sit tortor risus ante tincidunt vitae aliquam vestibulum id rutrum curabitur vitae id etiam augue aliquam sit augue ac magna quis sed tortor vestibulum scelerisque pretium et dolor tortor rutrum massa",
    },
    {
      id: 753,
      firstName: "Kathleen",
      lastName: "Tollund",
      email: "JHouston@sapien.com",
      phone: "(625)211-3490",
      address: { streetAddress: "961 Magna Ct", city: "Curtis Bay", state: "OR", zip: "72641" },
      description:
        "ac neque velit curabitur eros egestas pretium ipsum turpis sit nullam tortor mattis at sit lacus tellus elit vitae pulvinar sollicitudin placerat magna elit libero vitae pretium dolor ipsum tempor sed egestas",
    },
    {
      id: 597,
      firstName: "Frances",
      lastName: "Robichaud",
      email: "JLevy@massa.ly",
      phone: "(134)079-0407",
      address: { streetAddress: "648 Fringilla Ave", city: "Roxboro", state: "WV", zip: "82393" },
      description:
        "porttitor sollicitudin ac eget placerat vel amet sollicitudin sed scelerisque lectus rutrum pulvinar elementum curabitur ac at sollicitudin at pharetra scelerisque ac consectetur pharetra id amet sed turpis egestas tortor id convallis",
    },
    {
      id: 255,
      firstName: "Latasha",
      lastName: "Puckett",
      email: "ADellabadia@nullam.net",
      phone: "(542)484-4248",
      address: {
        streetAddress: "6370 Consequat Ln",
        city: "E. Lansing",
        state: "IA",
        zip: "13108",
      },
      description:
        "ac nunc tincidunt lacus in sit augue sed mattis vitae dolor magna magna suspendisse orci fringilla elementum sapien odio amet amet morbi tortor vestibulum ac convallis quis odio consequat aliquam amet libero",
    },
    {
      id: 496,
      firstName: "Eva",
      lastName: "Mills",
      email: "AMarks@dolor.net",
      phone: "(533)426-2284",
      address: {
        streetAddress: "1714 Tortor Ln",
        city: "White Bear Lake",
        state: "HI",
        zip: "18218",
      },
      description:
        "amet nec vestibulum curabitur sollicitudin et ipsum id neque vel et ante ipsum magna convallis ac odio et vel orci hendrerit et non vitae hendrerit aliquam placerat in suspendisse ante curabitur mattis",
    },
    {
      id: 361,
      firstName: "Vaibhavi",
      lastName: "Castellanos",
      email: "TAuthier@dolor.com",
      phone: "(132)600-3471",
      address: { streetAddress: "8332 Lorem Dr", city: "Anderson", state: "HI", zip: "46322" },
      description:
        "tincidunt mi ac et mi turpis pretium sed pharetra tincidunt dolor nullam tellus tortor porta eget aliquam tortor ante aliquam amet placerat vestibulum adipiscing velit rutrum sed placerat sed placerat magna egestas",
    },
    {
      id: 992,
      firstName: "Han",
      lastName: "Armstrong",
      email: "SPosen@elementum.net",
      phone: "(707)348-9891",
      address: {
        streetAddress: "3561 Vestibulum St",
        city: "Shrewsbury",
        state: "IN",
        zip: "28083",
      },
      description:
        "pharetra at curabitur odio aliquam adipiscing donec sollicitudin ante amet lectus sollicitudin ipsum hendrerit ac porttitor curabitur lacus vestibulum placerat donec massa libero consequat dolor facilisis sed sapien tortor amet amet in",
    },
    {
      id: 101,
      firstName: "Jayne",
      lastName: "Hohmann",
      email: "HBarge@id.com",
      phone: "(799)158-5616",
      address: { streetAddress: "4700 Massa Ln", city: "Annapolis", state: "MD", zip: "93689" },
      description:
        "massa massa consequat dolor risus sit at aliquam tempor egestas scelerisque lacus dolor ipsum sit facilisis pretium sit dolor malesuada magna sed dolor lectus sagittis vestibulum pharetra ac orci sagittis vel sed",
    },
    {
      id: 746,
      firstName: "Jeanette",
      lastName: "Diriwachter",
      email: "JDaly@et.org",
      phone: "(116)904-1248",
      address: { streetAddress: "2398 Odio Ave", city: "Lewiston", state: "WI", zip: "23875" },
      description:
        "amet odio porttitor aenean placerat convallis tincidunt velit pretium quis sapien risus consequat at sed magna porta sollicitudin massa magna vestibulum sit amet at dolor vestibulum malesuada elementum id sollicitudin odio non",
    },
    {
      id: 272,
      firstName: "Chunlei",
      lastName: "Barowsky",
      email: "VPrice@et.io",
      phone: "(576)174-7530",
      address: { streetAddress: "9121 Fringilla St", city: "Ferndale", state: "PA", zip: "80192" },
      description:
        "vel risus tortor ante ipsum consectetur odio donec sit nec sit odio augue dolor aenean magna rutrum aliquam nunc dolor sed ac malesuada sed sed consequat lacus molestie sit hendrerit pulvinar massa",
    },
    {
      id: 598,
      firstName: "Bola",
      lastName: "Lamb",
      email: "BAlarie@dolor.io",
      phone: "(275)160-1901",
      address: { streetAddress: "9692 Nullam St", city: "Tonasket", state: "NJ", zip: "81087" },
      description:
        "eros placerat vitae orci vitae ac malesuada suspendisse eget sagittis sollicitudin adipiscing vitae ipsum elit amet ac ipsum lacus porttitor curabitur sit elit ipsum quis mi sapien velit etiam pulvinar lacus et",
    },
    {
      id: 88,
      firstName: "Dawn",
      lastName: "Welchert",
      email: "DSessa@lectus.gov",
      phone: "(521)961-6090",
      address: { streetAddress: "8193 Aliquam Ave", city: "Minneola", state: "LA", zip: "67968" },
      description:
        "vestibulum molestie dolor at sed molestie lectus id sapien sit augue dui ac velit elit lacus eros hendrerit quis magna mattis scelerisque risus ipsum at vestibulum sollicitudin pulvinar vestibulum lectus suspendisse hendrerit",
    },
    {
      id: 629,
      firstName: "Kosta",
      lastName: "Coleman",
      email: "IStair@tincidunt.io",
      phone: "(734)632-8840",
      address: { streetAddress: "3672 Vitae Dr", city: "Covington", state: "NV", zip: "45541" },
      description:
        "lectus lacus tincidunt dolor convallis amet mattis pulvinar tincidunt lacus vel ipsum lacus tincidunt elementum mattis augue molestie aliquam vitae aliquam porta donec sapien porttitor at elementum lacus odio aliquam eros tellus",
    },
    {
      id: 870,
      firstName: "Justin",
      lastName: "Guth",
      email: "RMadison@dolor.ly",
      phone: "(810)605-4743",
      address: {
        streetAddress: "1085 Magna St",
        city: "Panama City Beach",
        state: "AR",
        zip: "93982",
      },
      description:
        "convallis donec sed amet eget tortor magna augue elit magna lorem ac velit sit mattis pulvinar nullam malesuada et et sed placerat massa vitae odio suspendisse pulvinar mi vitae ante tellus velit",
    },
  ];
  function getData(data) {
    $("tbody").html("");
    for (let i = 0; i < data.length; i++) {
      const row = $("<tr>").addClass("data-row").attr("id", i);
      const column1 = $("<td>").addClass("column1").html(data[i].id);
      const column2 = $("<td>").addClass("column2").html(data[i].firstName);
      const column3 = $("<td>").addClass("column3").html(data[i].lastName);
      const column4 = $("<td>").addClass("column4").html(data[i].email);
      const column5 = $("<td>").addClass("column5").html(data[i].phone);
      row.append(column1, column2, column3, column4, column5);
      $("tbody").append(row);
      $("#table-data").on("click", ".data-row", function () {
        $(".data-row").removeClass("active");
        $(this).addClass("active");
        $("#info-content div #user-name").html(
          data[$(this).attr("id")].firstName + " " + data[$(this).attr("id")].lastName
        );
        $("#info-content div textarea").html(data[$(this).attr("id")].description);
        $("#info-content div #address").html(data[$(this).attr("id")].address.streetAddress);
        $("#info-content div #city").html(data[$(this).attr("id")].address.city);
        $("#info-content div #state").html(data[$(this).attr("id")].address.state);
        $("#info-content div #zip").html(data[$(this).attr("id")].address.zip);
      });
    }
  }
  getData(response);
  $("#search-box").on("keyup", function () {
    var value = $(this).val();
    var object = searchName(value, response);
    console.log(object);
    getData(object);
    console.log(getData(object));
  });
  function searchName(value, data) {
    var filterData = [];
    for (i = 0; i < data.length; i++) {
      value = value.toLowerCase();
      var userName = data[i].firstName.toLowerCase();
      if (userName.includes(value)) {
        filterData.push(data[i]);
      }
    }
    return filterData;
  }
});
