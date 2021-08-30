globalThis.XDPApi = "http://dataset.hkstp.dev.curisinsight.com/v3";
globalThis.CMSApi = "http://cms.hkstp.dev.curisinsight.com/api/v2";
globalThis.XDPProApi = "http://project.hkstp.dev.curisinsight.com/api/v2";
globalThis.XFSApi = "http://xfs2-upload-gateway.hkstp.dev.curisinsight.com/v2";
globalThis.WSApi = "http://workspace.hkstp.dev.curisinsight.com/api/v2";
globalThis.AppApi = "http://app.hkstp.dev.curisinsight.com/api/v2";
globalThis.mapUri = "/js/map/";
globalThis.mockDate = "2019-03-01";
globalThis.benchmarkMonth = 10;
globalThis.benchmarkWeek = 5;
globalThis.benchmarkDay = 2;
globalThis.FuwuApi = "http://fuwu-api.hkstp.dev.curisinsight.com/api/v2";
globalThis.purchaseFlag = false;
globalThis.DaasApicall = true;
globalThis.DaasApiUrl = "http://daas-apps.hkstp.dev.curisinsight.com/api/v2";
globalThis.DashboardAppId = "00ec61b6668b47e48a167b3093286c5b";
globalThis.DaasAppId = "02214ebe80cb4069a73e5c1f58169eda";
globalThis.DaasAppVersionId = "01f7685ce2e54cb7b8de52fa96f7f33b";
globalThis.operationApi =
  "https://operation-api.hkstp.dev.curisinsight.com/api/v2";
globalThis.newOperationApi = "https://account.hkstp.dev.curisinsight.com/v3";
globalThis.cloudReport = "http://report.hkstp.dev.curisinsight.com/v3";
globalThis.DashboardApi =
  "http://dashboard-gateway.hkstp.dev.curisinsight.com/v1";
globalThis.DashboardWeb =
  "http://enigma-dashboard.hkstp.dev.curisinsight.com/dashboard/builder";
globalThis.TicketApi = "http://ticket.hkstp.dev.curisinsight.com/api/v2/xdp";
globalThis.NotificationApi =
  "https://notification.hkstp.dev.curisinsight.com/v3";
globalThis.WorkflowApi = "http://workflow.hkstp.dev.curisinsight.com/api/v2";
globalThis.domainLength = 3;
globalThis.uploadService = "https://xdp.basebit.me/get_started/111";
globalThis.awsService = "http://aws.hkstp.dev.curisinsight.com/v1";
globalThis.termsLink = "https://xdp.basebit.me/get_started/120";
globalThis.categoryRequirementsLink = "https://xdp.basebit.me/get_started/100";
globalThis.YifangUrl = "http://hkstp.dev.basebit.ai/orginfo/";
globalThis.publicCloudFlag = false;
globalThis.registryApi = "http://registry-api.hkstp.dev.curisinsight.com/v3";
globalThis.DashboardApp =
  "http://dashboardrunner-gateway.hkstp.dev.curisinsight.com/v3";
globalThis.regionName = "cn-northwest-1";
globalThis.enableTwoStepVerification = true;
globalThis.convertChinese = false;
globalThis.linkTool = "https://cms-fe-xdp-v3-aws.basebit.me/get_started/87";
globalThis.downloadDataset = false;
globalThis.documentTitle = "STP Platform";
globalThis.logo = "https://cdn.basebit.me/xdp/xdp_logo.svg?1";
globalThis.favicon = "/icons/favicon.svg";
globalThis.country = "CN";
globalThis.city = "厦门";
globalThis.showPrice = false;
globalThis.dashboardUrl = "https://xdp.basebit.me/get_started/119";
globalThis.XDPFederalApi = "http://fednoded.hkstp.dev.curisinsight.com/v1";
globalThis.DaaSFederalApi =
  "http://fednoded-daas.hkstp.dev.curisinsight.com/v1";
globalThis.federalID = "c1ce663b-3d5d-4df5-8b22-f8e2d5e726be";
globalThis.TEEID = "a92c5270-204a-4948-a148-3483cad2d3a2";
globalThis.FedAppApi = "http://fedappd.hkstp.dev.curisinsight.com/v1";
globalThis.fedAppId = "821f74c7-aefa-429a-9477-addae63fc787";
globalThis.showBlockchainTab = false;
globalThis.blockchainApi = "http://casblockchain.hkstp.dev.curisinsight.com/v3";
globalThis.loginLogo = "https://cdn.basebit.me/xdp/login_logo.svg?1";
globalThis.loginTitle = "login.title";
globalThis.loginSubTitle = "login.title.small";
globalThis.background = "/images/loginBG.png";
globalThis.footerColumns = [
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
globalThis.footerContainerStyle = {};
globalThis.CompetitionAPi = "http://competition.v3.hkha.curisinsight.com/v1";
globalThis.enableFederationButton = true;
globalThis.disableRegister = false;
globalThis.powers = {
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
globalThis.redirectBlockList = ["fednodes"];
globalThis.redirectBlockRouterList = [
  "/dataService/dataSource",
  "/dataService/datasets/",
  "/my/datasets/",
  "/projects/:id/data",
];
globalThis.defaultLanguage = "en-US";
globalThis.theme = "/css/theme.less";
globalThis.catalogType = ["Clinical"]; // 参数： Bio（生信），Clinical（医疗）
globalThis.sandBox = "1f24e3c3-b07a-41d0-890c-db7129145c41";
globalThis.enableGraphClick = false;
globalThis.showMetadata = true;
globalThis.XTableApi = "http://xtable.hkstp.dev.curisinsight.com/v1";
globalThis.showUsageReport = false;
globalThis.displayKeywordsToStar = false;
globalThis.CatalogStarKeywords = [
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
globalThis.PipelineApi =
  "http://pipeline-api.hkstp.dev.curisinsight.com/api/v2";
globalThis.showPoints = true;

// 测试使用
globalThis.mockApi = "/mock";
