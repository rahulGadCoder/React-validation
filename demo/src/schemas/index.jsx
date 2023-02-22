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
  billing_account: "",
  project_parent: "",
  project_create: false,
  apigee_instance_region: "",
  apigee_network_name: "apigee-network",
  apigee_network_routing_mode: "GLOBAL",
  apigee_network_main_peering_range: "10.0.0.0",
  apigee_network_main_peering_range_prefix_length: 22,
  apigee_network_support_peering_range: "10.1.0.0",
  apigee_network_support_peering_range_prefix_length: 28,
};

export const region = [
  {
    value: "Northeast",
    label: "Northeast",
  },
  {
    value: "Southwest",
    label: "Southwest",
  },
  {
    value: "West",
    label: "West",
  },
  {
    value: "Southeast",
    label: "Southeast",
  },
  {
    value: "Midwest",
    label: "Midwest",
  },
];

export const desc = {
  project_id: "Project Id",
  billing_account: "Billing Account",
  project_parent: "Project Parent",
  project_create: false,
  apigee_network_name: "Apigee Network Name",
  apigee_network_routing_mode: "GLOBAL",
  apigee_network_main_peering_range: "10.0.0.0",
  apigee_network_main_peering_range_prefix_length: 22,
  apigee_network_support_peering_range: "10.1.0.0",
  apigee_network_support_peering_range_prefix_length: 28,
};

//Page 2 //

export const page2Schema = Yup.object({
  apigee_org_kms_keyring_name: Yup.string()
    .min(4)
    .max(12)
    .required("Please enter apigee organization key ring name"),
  org_key_rotation_period: Yup.string()
    .min(4)
    .max(12)
    .required("Please enter apigee organization key ring rotation period"),
  instance_key_rotation_period: Yup.string()
    .min(4)
    .max(12)
    .required("Please enter apigee instance key ring rotation period"),
  envgroups: Yup.array().nullable(true),
  environments: Yup.array().nullable(true),
});

export const initialValuesPage2 = {
  apigee_org_kms_keyring_name: "apigee-x-org",
  org_key_rotation_period: "2592000s",
  instance_key_rotation_period: "2592000s",
  envgroups: [],
  environments: [],
};

//Page 3 //

export const page3Schema = Yup.object({
  env_name: Yup.string()
    .min(4)
    .max(12)
    .required("Please enter apigee organization key ring name"),
  env_display_name: Yup.string()
    .min(4)
    .max(12)
    .required("Please enter apigee organization key ring rotation period"),
  envgroups: Yup.array().nullable(true),
  environments: Yup.array().nullable(true),
});

export const initialValuesPage3 = {
  env_name: "apigee-x-org",
  env_display_name: "2592000s",
  envgroups: [],
  environments: [],
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
};
