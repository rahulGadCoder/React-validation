import * as Yup from "yup";

//Page 1 //
export const page1Schema = Yup.object({
  project_id: Yup.string().min(4).max(20).required("Please enter project Id"),
  billing_account: Yup.string().nullable(true),
  project_parent: Yup.string().nullable(true),
  project_create: Yup.string().nullable(true),
  apigee_instance_region: Yup.string().nullable(true),

  apigee_network_name: Yup.string()
    .min(4)
    .max(14)
    .required("Please enter apigee network name"),
  apigee_network_routing_mode: Yup.string()
    .min(4)
    .max(12)
    .required("Please enter apigee support network name"),
  apigee_network_main_peering_range: Yup.string()
    .min(4)
    .max(12)
    .required("Please enter apigee network peering range"),
  apigee_network_main_peering_range_prefix_length: Yup.string()
    .min(2)
    .max(2)
    .required("Please enter apigee network prefix length"),
  apigee_network_support_peering_range: Yup.string()
    .min(4)
    .max(12)
    .required("Please enter apigee network peering range"),
  apigee_network_support_peering_range_prefix_length: Yup.string()
    .min(2)
    .max(2)
    .required("Please enter apigee network prefix length"),
});

export const initialValuesPage1 = {
  project_id: "",
  billing_account: null,
  project_parent: null,
  project_create: false,
  apigee_instance_region: "us-central1",
  apigee_network_name: "apigee-network",
  apigee_network_routing_mode: "GLOBAL",
  apigee_network_main_peering_range: "10.0.0.0",
  apigee_network_main_peering_range_prefix_length: 22,
  apigee_network_support_peering_range: "10.1.0.0",
  apigee_network_support_peering_range_prefix_length: 28,
};

export const region = [
  { label: "Iowa", value: "us-central1" },
  { label: "South Carolina", value: "us-east1" },
  { label: "Northern Virginia", value: "us-east4" },
  { label: "Oregon", value: "us-west1" },
  { label: "Los Angeles", value: "us-west2" },
  { label: "Salt Lake City", value: "us-west3" },
  { label: "Las Vegas", value: "us-west4" },
  { label: "Montréal", value: "northamerica-northeast1" },
  { label: "São Paulo", value: "southamerica-east1" },
  { label: "Finland", value: "europe-north1" },
  { label: "Belgium", value: "europe-west1" },
  { label: "London", value: "europe-west2" },
  { label: "Frankfurt", value: "europe-west3" },
  { label: "Netherlands", value: "europe-west4" },
  { label: "Zürich", value: "europe-west6" },
  { label: "Warsaw", value: "europe-central2" },
  { label: "Taiwan", value: "asia-east1" },
  { label: "Tokyo", value: "asia-northeast1" },
  { label: "Osaka", value: "asia-northeast2" },
  { label: "Seoul", value: "asia-northeast3" },
  { label: "Hong Kong", value: "asia-east2" },
  { label: "Mumbai", value: "asia-south1" },
  { label: "Jakarta", value: "asia-southeast2" },
  { label: "Sydney", value: "australia-southeast1" },
];

export const desc = {
  // Step 1 //
  project_id: "Project id (also used for the Apigee Organization).",
  billing_account: "Billing account id.",
  project_parent:
    "Parent folder or organization in 'folders/folder_id' or 'organizations/org_id' format.",
  project_create: false,
  apigee_network_name: "VPC name.",
  apigee_network_routing_mode: "VPC network routing mode",
  apigee_network_main_peering_range: "Peering CIDR range",
  apigee_network_main_peering_range_prefix_length: "Peering CIDR range",
  apigee_network_support_peering_range: "Peering CIDR range",
  apigee_network_support_peering_range_prefix_length:
    "Support CIDR range of length /28 (required by Apigee for troubleshooting purposes)",

  // Step 2 //
  apigee_org_kms_keyring_name:
    "Name of the KMS Key Ring for Apigee Organization DB.",
  org_key_rotation_period:
    "Rotaton period for the organization DB encryption key.",
  instance_key_rotation_period:
    "Rotaton period for the instance disk encryption key.",
  envgroups: "Environment groups (NAME => [HOSTNAMES]).",
  environments: "Environments.",

  // Step 3//
  environments_name: "Environments Name.",
  env_display_name: "Env Display Name",

  //Step 4 //
  psc_ingress_network_name: "PSC ingress VPC name",
};

//Page 2 //

export const page2Schema = Yup.object({
  apigee_org_kms_keyring_name: Yup.string()
    .min(4)
    .max(20)
    .required("Please enter apigee organization key ring name"),
  org_key_rotation_period: Yup.string()
    .min(4)
    .max(20)
    .required("Please enter apigee organization key ring rotation period"),
  instance_key_rotation_period: Yup.string()
    .min(4)
    .max(20)
    .required("Please enter apigee instance key ring rotation period"),
  envgroups: Yup.array().nullable(true),
  envgroupsStored: Yup.array().nullable(true),
});

export const initialValuesPage2 = {
  apigee_org_kms_keyring_name: "apigee-x-org",
  org_key_rotation_period: "2592000s",
  instance_key_rotation_period: "2592000s",
  envgroups: [
    {
      EnvironmentGroup: "",
      EnvironmentGroupHost: [
        {
          envGroupHostName: "",
        },
      ],
    },
  ],
  envgroupsStored: [],
};

//Page 3 //

export const page3Schema = Yup.object({
  // env_name: Yup.string()
  //   .min(4)
  //   .max(20)
  //   .required("Please enter apigee organization key ring name"),
  // env_display_name: Yup.string()
  //   .min(4)
  //   .max(20)
  //   .required("Please enter apigee organization key ring rotation period"),

  env_name: Yup.string(),
  env_display_name: Yup.string(),
  envs: Yup.array().nullable(true),
  envsStored: Yup.array().nullable(true),
});

export const initialValuesPage3 = {
  envs: [
    {
      EnvironmentDescription: "",
      EnvironmentName: "",
      EnvironmentDisplayName: "",
      EnvironmentGroups: [
        {
            EnvironmentGroupName: "",
        },
      ],
    },
  ],
  envsStored: [],
};

// Page 4 //
export const page4Schema = Yup.object({
  psc_ingress_network_name: Yup.string()
    .min(4)
    .max(20)
    .required("Please enter apigee organization key ring name"),
  user_managed_certificate: Yup.boolean().required(),
  use_development_hostname: Yup.boolean().required(),
  user_managed_certificate_location: Yup.string().required(),
});

export const initialValuesPage4 = {
  psc_ingress_network_name: "apigee-psc-network",
  user_managed_certificate: false,
  use_development_hostname: false,
  user_managed_certificate_location: "./certs/certificate.pem",
  user_managed_certificate_key_location: "./certs/private_key.pem",
};

// "envgroups": [
//   {
//   name : "prod"
//   hostname:[ "prod.api.intelliswift.com", "test.api.intelliswift.com"],

//   },
//   {
//     name : "prod"
//     hostname:[ "prod.api.intelliswift.com", "test.api.intelliswift.com"]
//   }
//  ],
