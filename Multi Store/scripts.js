import {
    connections,
    exports,
    imports,
    flows
} from 'integrator-api';

class MagentoInstaller {
    createExport(options) {
        var exportJson = {
            "name": "IA 2.0 NetSuite Sales Order Export ",
            "description": "Exporting Sales Order from Netsuite",
            "asynchronous": true,
            "type": "once",
            "once": {
                "booleanField": "custbody_celigo_etail_order_exported"
            },
            "hooks": {
                "preSavePage": {
                    "_scriptId": "5f968552b2b90458b6f81d68",
                    "function": "preSave"
                }
            },
            "netsuite": {
                "type": "restlet",
                "skipGrouping": false,
                "statsOnly": false,
                "restlet": {
                    "recordType": "transaction",
                    "searchId": "497867",
                    "useSS2Restlets": false
                }
            },
            "transform": {
                "type": "expression",
                "expression": {
                    "rules": [
                        [
                            {
                                "extract": "*.id",
                                "generate": "id"
                            },
                            {
                                "extract": "*.[Item Name]",
                                "generate": "item[*].Name"
                            },
                            {
                                "extract": "*.Amount",
                                "generate": "item[*].Amount"
                            },
                            {
                                "extract": "*.[Billing Address 1]",
                                "generate": "BillingAddress1"
                            },
                            {
                                "extract": "*.[Billing Address 2]",
                                "generate": "Billing Address2"
                            },
                            {
                                "extract": "*.[Billing City]",
                                "generate": "Billing City"
                            },
                            {
                                "extract": "*.[Billing Country]",
                                "generate": "Billing Country"
                            },
                            {
                                "extract": "*.[Billing State/Province]",
                                "generate": "Billing State/Province"
                            },
                            {
                                "extract": "*.[Billing Country Code]",
                                "generate": "Billing Country Code"
                            },
                            {
                                "extract": "*.[Billing Zip]",
                                "generate": "Billing Zip"
                            },
                            {
                                "extract": "*.[Shipping Address 1]",
                                "generate": "Shipping Address1"
                            },
                            {
                                "extract": "*.[Shipping Address 2]",
                                "generate": "Shipping Address2"
                            },
                            {
                                "extract": "*.[Shipping City]",
                                "generate": "Shipping City"
                            },
                            {
                                "extract": "*.[Shipping Country]",
                                "generate": "Shipping Country"
                            },
                            {
                                "generate": "Shipping Country Code",
                                "extract": "*.[Shipping Country Code]"
                            },
                            {
                                "generate": "Shipping State/Province",
                                "extract": "*.[Shipping State/Province]"
                            },
                            {
                                "generate": "Shipping Zip",
                                "extract": "*.[Shipping Zip]"
                            },
                            {
                                "generate": "First Name",
                                "extract": "*.[First Name]"
                            },
                            {
                                "generate": "Last Name",
                                "extract": "*.[Last Name]"
                            },
                            {
                                "generate": "Email",
                                "extract": "*.Email"
                            },
                            {
                                "generate": "Phone",
                                "extract": "*.[Phone Number]"
                            },
                            {
                                "generate": "Shipping Cost",
                                "extract": "*.[Shipping Cost]"
                            },
                            {
                                "generate": "PaymentMethod",
                                "extract": "*.[Payment Method]"
                            },
                            {
                                "extract": "*.Quantity",
                                "generate": "item[*].Quantity"
                            },
                            {
                                "generate": "Ship Via",
                                "extract": "*.[Ship Via]"
                            },
                            {
                                "generate": "Currency",
                                "extract": "*.Currency"
                            },
                            {
                                "generate": "Total",
                                "extract": "*.Total"
                            },
                            {
                                "generate": "item[*].Item Rate",
                                "extract": "*.[Item Rate]"
                            },
                            {
                                "extract": "*.[Billing Phone]",
                                "generate": "Billing Phone"
                            },
                            {
                                "extract": "*.[Shipping Phone]",
                                "generate": "Shipping Phone"
                            },
                            {
                                "extract": "*.[eTail Customer Id]",
                                "generate": "eTail Customer Id"
                            },
                            {
                                "extract": "*.[Item Id]",
                                "generate": "item[*].Id"
                            },
                            {
                                "extract": "*.[Store Id]",
                                "generate": "Store Id"
                            }
                        ]
                    ],
                    "version": "1"
                },
                "version": "1",
                "rules": [
                    [
                        {
                            "extract": "*.id",
                            "generate": "id"
                        },
                        {
                            "extract": "*.[Item Name]",
                            "generate": "item[*].Name"
                        },
                        {
                            "extract": "*.Amount",
                            "generate": "item[*].Amount"
                        },
                        {
                            "extract": "*.[Billing Address 1]",
                            "generate": "BillingAddress1"
                        },
                        {
                            "extract": "*.[Billing Address 2]",
                            "generate": "Billing Address2"
                        },
                        {
                            "extract": "*.[Billing City]",
                            "generate": "Billing City"
                        },
                        {
                            "extract": "*.[Billing Country]",
                            "generate": "Billing Country"
                        },
                        {
                            "extract": "*.[Billing State/Province]",
                            "generate": "Billing State/Province"
                        },
                        {
                            "extract": "*.[Billing Country Code]",
                            "generate": "Billing Country Code"
                        },
                        {
                            "extract": "*.[Billing Zip]",
                            "generate": "Billing Zip"
                        },
                        {
                            "extract": "*.[Shipping Address 1]",
                            "generate": "Shipping Address1"
                        },
                        {
                            "extract": "*.[Shipping Address 2]",
                            "generate": "Shipping Address2"
                        },
                        {
                            "extract": "*.[Shipping City]",
                            "generate": "Shipping City"
                        },
                        {
                            "extract": "*.[Shipping Country]",
                            "generate": "Shipping Country"
                        },
                        {
                            "generate": "Shipping Country Code",
                            "extract": "*.[Shipping Country Code]"
                        },
                        {
                            "generate": "Shipping State/Province",
                            "extract": "*.[Shipping State/Province]"
                        },
                        {
                            "generate": "Shipping Zip",
                            "extract": "*.[Shipping Zip]"
                        },
                        {
                            "generate": "First Name",
                            "extract": "*.[First Name]"
                        },
                        {
                            "generate": "Last Name",
                            "extract": "*.[Last Name]"
                        },
                        {
                            "generate": "Email",
                            "extract": "*.Email"
                        },
                        {
                            "generate": "Phone",
                            "extract": "*.[Phone Number]"
                        },
                        {
                            "generate": "Shipping Cost",
                            "extract": "*.[Shipping Cost]"
                        },
                        {
                            "generate": "PaymentMethod",
                            "extract": "*.[Payment Method]"
                        },
                        {
                            "extract": "*.Quantity",
                            "generate": "item[*].Quantity"
                        },
                        {
                            "generate": "Ship Via",
                            "extract": "*.[Ship Via]"
                        },
                        {
                            "generate": "Currency",
                            "extract": "*.Currency"
                        },
                        {
                            "generate": "Total",
                            "extract": "*.Total"
                        },
                        {
                            "generate": "item[*].Item Rate",
                            "extract": "*.[Item Rate]"
                        },
                        {
                            "extract": "*.[Billing Phone]",
                            "generate": "Billing Phone"
                        },
                        {
                            "extract": "*.[Shipping Phone]",
                            "generate": "Shipping Phone"
                        },
                        {
                            "extract": "*.[eTail Customer Id]",
                            "generate": "eTail Customer Id"
                        },
                        {
                            "extract": "*.[Item Id]",
                            "generate": "item[*].Id"
                        },
                        {
                            "extract": "*.[Store Id]",
                            "generate": "Store Id"
                        }
                    ]
                ]
            },
            "adaptorType": "NetSuiteExport"
        }
        exportJson._connectionId = options.nsConnectionId
        return exports.create(exportJson)
    }
    createImport(options) {
        var importJSON_M2 = {
            "name": "IA 2.0 Import Orders to Magento2",
            "description": "Importing Orders from Netsuite to Magento 2",
            "distributed": false,
            "lookups": [
                {
                    "name": "3Mqi43vP1x",
                    "map": {
                        "Visa": "braintree"
                    },
                    "allowFailures": true,
                    "default": "braintree"
                }
            ],
            "mapping": {
                "fields": [
                    {
                        "extract": "Total",
                        "generate": "entity.base_grand_total"
                    },
                    {
                        "extract": "Total",
                        "generate": "entity.grand_total"
                    },
                    {
                        "extract": "[Shipping Cost]",
                        "generate": "entity.shipping_amount"
                    },
                    {
                        "extract": "{{subtract Total [Shipping Cost]}}",
                        "generate": "entity.base_subtotal"
                    },
                    {
                        "extract": "{{subtract Total [Shipping Cost]}}",
                        "generate": "entity.subtotal"
                    },
                    {
                        "generate": "entity.customer_group_id",
                        "hardCodedValue": "1"
                    },
                    {
                        "extract": "[First Name]",
                        "generate": "entity.customer_firstname"
                    },
                    {
                        "extract": "Email",
                        "generate": "entity.customer_email"
                    },
                    {
                        "extract": "[Last Name]",
                        "generate": "entity.customer_lastname"
                    },
                    {
                        "extract": "[Ship Via]",
                        "generate": "entity.shipping_description"
                    },
                    {
                        "extract": "[Billing Country Code]",
                        "generate": "entity.billing_address.country_id"
                    },
                    {
                        "extract": "[Billing City]",
                        "generate": "entity.billing_address.city"
                    },
                    {
                        "extract": "[First Name]",
                        "generate": "entity.billing_address.firstname"
                    },
                    {
                        "extract": "[Last Name]",
                        "generate": "entity.billing_address.lastname"
                    },
                    {
                        "extract": "[Billing Zip]",
                        "generate": "entity.billing_address.postcode"
                    },
                    {
                        "extract": "[Billing State/Province]",
                        "generate": "entity.billing_address.region_code"
                    },
                    {
                        "extract": "BillingAddress1",
                        "generate": "entity.billing_address.street[0]"
                    },
                    {
                        "extract": "[Billing Address2]",
                        "generate": "entity.billing_address.street[1]"
                    },
                    {
                        "extract": "[Billing Phone]",
                        "generate": "entity.billing_address.telephone"
                    },
                    {
                        "extract": "PaymentMethod",
                        "generate": "entity.payment.method",
                        "lookupName": "3Mqi43vP1x",
                        "default": "checkmo"
                    },
                    {
                        "extract": "[eTail Customer Id]",
                        "generate": "entity.customer_id"
                    },
                    {
                        "extract": "[Store Id]",
                        "generate": "entity.store_id"
                    },
                    {
                        "generate": "entity.status",
                        "hardCodedValue": "pending"
                    }
                ],
                "lists": [
                    {
                        "fields": [
                            {
                                "extract": "item[*].Name",
                                "generate": "name"
                            },
                            {
                                "extract": "item[*].Item Rate",
                                "generate": "original_price"
                            },
                            {
                                "extract": "item[*].Item Rate",
                                "generate": "price"
                            },
                            {
                                "extract": "item[*].Quantity",
                                "generate": "qty_ordered"
                            },
                            {
                                "extract": "item[*].Id",
                                "generate": "sku"
                            },
                            {
                                "extract": "item[*].Amount",
                                "generate": "row_total"
                            },
                            {
                                "generate": "product_id",
                                "hardCodedValue": "109"
                            },
                            {
                                "generate": "product_type",
                                "hardCodedValue": "simple"
                            },
                            {
                                "generate": "store_id",
                                "hardCodedValue": "1"
                            }
                        ],
                        "generate": "entity.items"
                    },
                    {
                        "fields": [
                            {
                                "extract": "[Shipping City]",
                                "generate": "shipping.address.city"
                            },
                            {
                                "extract": "[Shipping Country Code]",
                                "generate": "shipping.address.country_id"
                            },
                            {
                                "extract": "[First Name]",
                                "generate": "shipping.address.firstname"
                            },
                            {
                                "extract": "[Last Name]",
                                "generate": "shipping.address.lastname"
                            },
                            {
                                "extract": "[Shipping Zip]",
                                "generate": "shipping.address.postcode"
                            },
                            {
                                "extract": "[Shipping State/Province]",
                                "generate": "shipping.address.region_code"
                            },
                            {
                                "extract": "[Shipping Address1]",
                                "generate": "shipping.address.street[0]"
                            },
                            {
                                "extract": "[Shipping Address2]",
                                "generate": "shipping.address.street[1]"
                            },
                            {
                                "extract": "[Shipping Phone]",
                                "generate": "shipping.address.telephone"
                            },
                            {
                                "generate": "shipping.method",
                                "hardCodedValue": "flatrate_flatrate"
                            }
                        ],
                        "generate": "entity.extension_attributes.shipping_assignments"
                    }
                ]
            },
            "http": {
                "relativeURI": [
                    "/V1/orders/"
                ],
                "method": [
                    "POST"
                ],
                "body": [

                ],
                "batchSize": 1,
                "requestMediaType": "json",
                "successMediaType": "json",
                "errorMediaType": "json",
                "strictHandlebarEvaluation": true,
                "sendPostMappedData": true,
                "lookups": [
                    {
                        "name": "3Mqi43vP1x",
                        "map": {
                            "Visa": "braintree"
                        },
                        "allowFailures": true,
                        "default": "braintree",
                        "useImportHeaders": false
                    }
                ]
            },
            "rest": {
                "relativeURI": [
                    "/V1/orders/"
                ],
                "method": [
                    "POST"
                ],
                "body": [

                ],
                "lookups": [
                    {
                        "name": "3Mqi43vP1x",
                        "map": {
                            "Visa": "braintree"
                        },
                        "allowFailures": true,
                        "default": "braintree"
                    }
                ]
            },
            "adaptorType": "RESTImport"
        }
        importJSON_M2._connectionId = options.magentoConnection
        var importJSON_NS = {
            "name": "IA 2.0 Order Id write back",
            "description": "Writing Back order Ids",
            "distributed": true,
            "lookups": [

            ],
            "netsuite_da": {
                "useSS2Restlets": false,
                "operation": "update",
                "recordType": "salesorder",
                "internalIdLookup": {
                    "expression": "[\"internalid\",\"is\",\"{{{id}}}\"]"
                },
                "lookups": [],
                "mapping": {
                    "fields": [
                        {
                            "extract": "Magento_OrderID",
                            "generate": "custbody_celigo_mag2_order_number",
                            "internalId": false
                        },
                        {
                            "extract": "['Magento_PO#']",
                            "generate": "otherrefnum",
                            "internalId": false
                        },
                        {
                            "generate": "custbody_celigo_etail_order_id",
                            "extract": "Magento_OrderID",
                            "internalId": false
                        }
                    ],
                    "lists": []
                }
            },
            "adaptorType": "NetSuiteDistributedImport"
        }
        importJSON_NS._connectionId = options.nsConnectionId
        var m2Import = imports.create(importJSON_M2);
        var nsImport = imports.create(importJSON_NS);
        return [m2Import, nsImport];
    }
    createFlow(options) {
        var flowJson = {
            "name": "NetSuite to Magento 2 Order Add",
            "disabled": false,
            "skipRetries": false,
            "pageProcessors": [
                {
                    "responseMapping": {
                        "fields": [
                            {
                                "extract": "entity_id",
                                "generate": "Magento_OrderID"
                            },
                            {
                                "extract": "increment_id",
                                "generate": "Magento_PO#"
                            }
                        ],
                        "lists": []
                    },
                    "type": "import",
                    "_importId": "5f8715b830acea7b58fd603c"
                },
                {
                    "responseMapping": {
                        "fields": [],
                        "lists": []
                    },
                    "type": "import",
                    "_importId": "5f88332c9f997604ea58c15d"
                }
            ],
            "pageGenerators": [
                {
                    "_exportId": "5f87152249c8e479eb05132e",
                    "skipRetries": false
                }
            ]
        }
        flowJson.pageProcessors[0]._importId = options.importM2Id
        flowJson.pageProcessors[1]._importId = options.importNSId
        flowJson.pageGenerators[0]._exportId = options.exportId
        flows.create(flowJson)
    }
}

var setUpFunction = function (options) {
    var magentoFlowSetup = new MagentoInstaller();
    var allConnections = connections.find();
    var nsConnId;
    var magentoConnection;
    allConnections.forEach(function (connection) {
        if (connection.type === "netsuite") nsConnId = connection._id
        if (connection.type === "rest") magentoConnection = connection._id
    })
    var integrationId = options.resource._id;
    let createOptions = {
        "nsConnectionId": nsConnId,
        "integrationId": integrationId,
        "magentoConnection": magentoConnection,
        "options": options
    }
    var flowExport = magentoFlowSetup.createExport(createOptions);
    var flowImports = magentoFlowSetup.createImport(createOptions);
    createOptions.exportId = flowExport._id
    createOptions.importM2Id = flowImports[0]._id
    createOptions.importNSId = flowImports[1]._id
    var flow = magentoFlowSetup.createFlow(createOptions);
    return;
}

var addnewChild = function (options) {
    var childIntegration = {
        "name": "Store - I",
        "description": "MAG Store 1 integration",
        "install": [],
        "version": "1.0.0",
        "_registeredConnectionIds": [],
        "update": {},
        "installSteps": [
            {
                "name": "Magento 2 connection",
                "description": "Configure your M2 connection",
                "completed": false,
                "type": "connection",
                "sourceConnection": {
                    "type": "rest",
                    "name": "Magento 2 Connection",
                    "assistant": "magento",
                    "externalId": "ia_2dot0_magento_connection"
                },
                "function": "setUpFunction",
                "_scriptId": "5f969a2b0674c0744a2a1707"
            }
        ],
        "uninstall Steps": [],
        "flowGroupings": []
    }
    return childIntegration;
}

var getSettings = function (options) {
    var settingsForm1 = {
        "fieldmap": {
            "testSetting": {
                "name": "testSetting",
                "type": "text",
                "id": "testSetting",
                "Label": "Sample Setting"
            }
        },
        "layout": {
            "fileds": ["testSetting"]
        }
    }
    return settingsForm1
}
//can be changed accordingly.
var preSave = function (options) {
    return options.newResource
}
var preMap = function (options) {
    return options.newResource
}
var postMap = function (options) {
    return options.newResource
}
var postSubmit = function (options) {
    return options.newResource
}