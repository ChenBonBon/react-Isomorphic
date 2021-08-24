globalThis.XDPApi = "http://dataset.hkstp.dev.curisinsight.com/v3";
window.CMSApi = "http://cms.hkstp.dev.curisinsight.com/api/v2";
window.XDPProApi = "http://project.hkstp.dev.curisinsight.com/api/v2";
window.XFSApi = "http://xfs2-upload-gateway.hkstp.dev.curisinsight.com/v2";
window.WSApi = "http://workspace.hkstp.dev.curisinsight.com/api/v2";
window.AppApi = "http://app.hkstp.dev.curisinsight.com/api/v2";
window.mapUri = "/js/map/";
window.mockDate = "2019-03-01";
window.benchmarkMonth = 10;
window.benchmarkWeek = 5;
window.benchmarkDay = 2;
window.FuwuApi = "http://fuwu-api.hkstp.dev.curisinsight.com/api/v2";
window.purchaseFlag = false;
window.DaasApicall = true;
window.DaasApiUrl = "http://daas-apps.hkstp.dev.curisinsight.com/api/v2";
window.DashboardAppId = "00ec61b6668b47e48a167b3093286c5b";
window.DaasAppId = "02214ebe80cb4069a73e5c1f58169eda";
window.DaasAppVersionId = "01f7685ce2e54cb7b8de52fa96f7f33b";
window.operationApi = "https://operation-api.hkstp.dev.curisinsight.com/api/v2";
window.newOperationApi = "https://account.hkstp.dev.curisinsight.com/v3";
window.cloudReport = "http://report.hkstp.dev.curisinsight.com/v3";
window.DashboardApi = "http://dashboard-gateway.hkstp.dev.curisinsight.com/v1";
window.DashboardWeb =
  "http://enigma-dashboard.hkstp.dev.curisinsight.com/dashboard/builder";
window.TicketApi = "http://ticket.hkstp.dev.curisinsight.com/api/v2/xdp";
window.NotificationApi = "https://notification.hkstp.dev.curisinsight.com/v3";
window.WorkflowApi = "http://workflow.hkstp.dev.curisinsight.com/api/v2";
window.domainLength = 3;
window.uploadService = "https://xdp.basebit.me/get_started/111";
window.awsService = "http://aws.hkstp.dev.curisinsight.com/v1";
window.termsLink = "https://xdp.basebit.me/get_started/120";
window.categoryRequirementsLink = "https://xdp.basebit.me/get_started/100";
window.YifangUrl = "http://hkstp.dev.basebit.ai/orginfo/";
window.publicCloudFlag = false;
window.registryApi = "http://registry-api.hkstp.dev.curisinsight.com/v3";
window.DashboardApp =
  "http://dashboardrunner-gateway.hkstp.dev.curisinsight.com/v3";
window.regionName = "cn-northwest-1";
window.enableTwoStepVerification = true;
window.convertChinese = false;
window.linkTool = "https://cms-fe-xdp-v3-aws.basebit.me/get_started/87";
window.downloadDataset = false;
window.documentTitle = "STP Platform";
window.logo = "https://cdn.basebit.me/xdp/xdp_logo.svg?1";
window.favicon = "/icons/favicon.svg";
window.country = "CN";
window.city = "厦门";
window.showPrice = false;
window.dashboardUrl = "https://xdp.basebit.me/get_started/119";
window.XDPFederalApi = "http://fednoded.hkstp.dev.curisinsight.com/v1";
window.DaaSFederalApi = "http://fednoded-daas.hkstp.dev.curisinsight.com/v1";
window.federalID = "c1ce663b-3d5d-4df5-8b22-f8e2d5e726be";
window.TEEID = "a92c5270-204a-4948-a148-3483cad2d3a2";
window.FedAppApi = "http://fedappd.hkstp.dev.curisinsight.com/v1";
window.fedAppId = "821f74c7-aefa-429a-9477-addae63fc787";
window.showBlockchainTab = false;
window.blockchainApi = "http://casblockchain.hkstp.dev.curisinsight.com/v3";
window.loginLogo = "https://cdn.basebit.me/xdp/login_logo.svg?1";
window.loginTitle = "login.title";
window.loginSubTitle = "login.title.small";
window.background = "/images/loginBG.png";
window.footerColumns = [
  {
    rows: [
      {
        type: "link",
        value: "沪ICP备16013332号",
        href: "http://www.miit.gov.cn/",
        style: {},
      },
      {
        type: "link",
        code: "terms.condition.translate",
        href: "https://xdp.basebit.me/home/privacy",
        target: "_blank",
        style: {},
      },
    ],
    style: {},
  },
  {
    rows: [
      { type: "text", value: "沪公网安备31010502003244号", style: {} },
      { type: "copyright", style: {} },
    ],
    style: {},
  },
];
window.footerContainerStyle = {};
window.CompetitionAPi = "http://competition.v3.hkha.curisinsight.com/v1";
window.enableFederationButton = true;
window.disableRegister = false;
window.powers = {
  user: {
    allowList: [
      "email",
      "mobile",
      "firstName",
      "lastName",
      "company",
      "position",
      "verification",
    ],
    actionList: {
      email: {
        label: "ticket.user.email",
        value: "",
        placeholder: "register.msg.email.required",
        type: "input",
        disabled: true,
        rules: [{ required: true, code: "register.msg.email.required" }],
      },
      mobile: {
        label: "contact.phone",
        value: { region: "CN", mobile: "" },
        placeholder: "enter.phone.number",
        type: "mobile",
      },
      firstName: {
        label: "firstName",
        value: "",
        placeholder: "enter.firstName",
        type: "input",
        rules: [{ required: true, code: "enter.firstName" }],
      },
      lastName: {
        label: "lastName",
        value: "",
        placeholder: "enter.lastName",
        type: "input",
        rules: [{ required: true, code: "enter.lastName" }],
      },
      company: {
        label: "org.company.school",
        value: "",
        placeholder: "enter.org.company.school",
        type: "input",
        disabled: true,
      },
      position: {
        label: "position",
        value: "",
        placeholder: "enter.position",
        type: "input",
      },
      verification: {
        label: "account.security",
        value: "0",
        options: [
          { title: "enable.email.verification", value: "1" },
          { title: "disable.email.verification", value: "0" },
        ],
        type: "radio",
      },
      identificationType: {
        label: "user.identification.type",
        value: "",
        placeholder: "enter.user.identification.type",
        type: "input",
      },
      identificationNumber: {
        label: "user.identification.number",
        value: "",
        placeholder: "enter.user.identification.number",
        type: "input",
      },
      identificationExpiryDate: {
        label: "user.identification.expiried.date",
        value: null,
        placeholder: "enter.user.identification.expiried.date",
        type: "datepicker",
      },
    },
  },
  organization: {
    allowList: ["name", "country", "city", "email", "description"],
    actionList: {
      name: {
        label: "org.or.company.name",
        value: "",
        placeholder: "enter.company.org.name",
        type: "input",
        rules: [
          { required: true, whitespace: true, code: "enter.company.org.name" },
        ],
      },
      country: {
        label: "country.info",
        value: "",
        placeholder: "enter.country",
        type: "region",
        rules: [{ required: true, code: "enter.country" }],
      },
      city: {
        label: "city.info",
        value: "",
        placeholder: "enter.city",
        type: "input",
        rules: [{ required: true, whitespace: true, code: "enter.city" }],
      },
      email: {
        label: "ticket.user.email",
        value: "",
        placeholder: "please.enter.email",
        type: "input",
        rules: [
          { type: "email", code: "enter.correct.email" },
          { required: "true", code: "please.enter.email" },
        ],
      },
      description: {
        label: "masterData.output.column.description",
        value: "",
        placeholder: "masterData.table.field.valid.desc",
        type: "textarea",
      },
      contactPersonName: {
        label: "contact.person.name",
        value: "",
        placeholder: "enter.contact.person.name",
        type: "input",
      },
      contactPersonPosition: {
        label: "contact.person.position",
        value: "",
        placeholder: "enter.contact.person.position",
        type: "input",
      },
      contactPersonEmail: {
        label: "contact.person.email",
        value: "",
        placeholder: "enter.contact.person.email",
        type: "input",
      },
      contactPersonPhone: {
        label: "contact.person.phone",
        value: { region: "CN", mobile: "" },
        placeholder: "enter.contact.person.phone",
        type: "mobile",
      },
      agreementStatus: {
        label: "agreement.status",
        value: "",
        color: "",
        type: "badge",
      },
      attachments: {
        label: "supporting.documents",
        value: [],
        placeholder: "upload.files",
        type: "fileList",
      },
      status: { label: "status", value: "", color: "", type: "badge" },
      expiredAt: {
        label: "expired.date",
        value: null,
        type: "datepicker",
        disabled: true,
      },
    },
  },
};
window.redirectBlockList = ["fednodes"];
window.redirectBlockRouterList = [
  "/dataService/dataSource",
  "/dataService/datasets/",
  "/my/datasets/",
  "/projects/:id/data",
];
window.defaultLanguage = "en-US";
window.theme = "/css/theme.less";
window.catalogType = ["Clinical"]; // 参数： Bio（生信），Clinical（医疗）
window.sandBox = "1f24e3c3-b07a-41d0-890c-db7129145c41";
window.enableGraphClick = false;
window.showMetadata = true;
window.XTableApi = "http://xtable.hkstp.dev.curisinsight.com/v1";
window.showUsageReport = false;
window.displayKeywordsToStar = false;
window.CatalogStarKeywords = [
  "厦门市中医院",
  "厦门市海沧医院",
  "厦门市第三医院",
  "厦门市第五医院",
  "厦门市妇幼保健院",
  "厦门市仙岳医院",
  "厦门医学院附属口腔医院",
  "厦门大学附属心血管病医院",
  "厦门市儿童医院",
  "厦门市同安区中医医院",
  "厦门大学附属第一医院-(合计)",
  "厦门大学附属第一医院杏林分院",
  "厦门大学附属第一医院思明分院",
  "厦门医学院附属第二医院",
  "厦门大学附属中山医院",
  "厦门大学附属第一医院",
  "第一医院杏林分院",
  "第一医院思明分院",
  "厦门市口腔医院",
];
window.PipelineApi = "http://pipeline-api.hkstp.dev.curisinsight.com/api/v2";
window.showPoints = true;

// 测试使用
window.mockApi = "/mock";
