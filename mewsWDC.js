(function () {
    var myConnector = tableau.makeConnector();

    const urlExtention = "/api/connector/v1/";
    const serviceIds = [];

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        
        // define cols
        // Products
        var prod_cols = [{
            id: "id",
            dataType: "string"
        }, {
            id: "name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "external_name",
            dataType: tableau.dataTypeEnum.string
        }, 
        {
            id: "description",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "serviceId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "categoryId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "isActive",
            dataType: tableau.dataTypeEnum.bool
        },
        {
            id: "shortName",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "charging",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "posting",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "price",
            dataType: tableau.dataTypeEnum.float
        },
        {
            id: "currency",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "net",
            dataType: tableau.dataTypeEnum.float
        },
        {
            id: "tax",
            dataType: tableau.dataTypeEnum.float
        },
        {
            id: "taxRate",
            dataType: tableau.dataTypeEnum.float
        },
        {
            id: "netValue",
            dataType: tableau.dataTypeEnum.float
        },
        {
            id: "grossValue",
            dataType: tableau.dataTypeEnum.float
        },
        {
            id: "taxCode",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "taxValue",
            dataType: tableau.dataTypeEnum.float
        }];

        var prodTable = {
            id: "products",
            alias: "All products listend in Mews client",
            columns: prod_cols
        };

        // Bills
        var bills_cols = [{
            id: "id",
            dataType: "string"
        }, {
            id: "customerId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "accountId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "state",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "type",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "createdUtc",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "issuedUtc",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "taxedUtc",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "paidUtc",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "dueUtc",
            dataType: tableau.dataTypeEnum.string
        }];

        var billsTable = {
            id: "bills",
            alias: "All bills listend in Mews client",
            columns: bills_cols
        };

        // Outlet Items
        var outlet_cols = [{
            id: "id",
            dataType: "string"
        },
        {
            id: "billId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "accountingCategoryId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "consumedUtc",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "createdUtc",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "name",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "unitCount",
            dataType: tableau.dataTypeEnum.int
        },
        {
            id: "grossValue",
            dataType: tableau.dataTypeEnum.float
        },
        {
            id: "netValue",
            dataType: tableau.dataTypeEnum.float
        },
        {
            id: "currency",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "notes",
            dataType: tableau.dataTypeEnum.string
        }];

        var outletTable = {
            id: "outlet",
            alias: "All outlet items listend in Mews client",
            columns: outlet_cols
        };

        // Accounting Items
        var accounting_cols = [{
            id: "id",
            dataType: "string"
        },
        {
            id: "billId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "customerId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "consumedUtc",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "orderId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "taxCode",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "accountingCategoryId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "netValue",
            dataType: tableau.dataTypeEnum.float
        },
        {
            id: "taxValue",
            dataType: tableau.dataTypeEnum.float
        },
        {
            id: "grossValue",
            dataType: tableau.dataTypeEnum.float
        },
        {
            id: "tax",
            dataType: tableau.dataTypeEnum.float
        },
        {
            id: "currency",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "type",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "closedUtc",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "state",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "productId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "rebateItemId",
            dataType: tableau.dataTypeEnum.string
        }];

        var accountingTable = {
            id: "accounting",
            alias: "All accounting items listend in Mews client",
            columns: accounting_cols
        };

        // Customers
        var customers_cols = [{
            id: "id",
            dataType: "string"
        },
        {
            id: "number",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "firstName",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "lastName",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "secondLastName",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "title",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "sex",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "nationalityCode",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "languageCode",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "birthDate",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "birthPlace",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "email",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "phone",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "loyaltyCode",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "accountingCode",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "billingCode",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "address",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "createdUtc",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "updatedUtc",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "companyId",
            dataType: tableau.dataTypeEnum.string
        }];

        var customersTable = {
            id: "customers",
            alias: "All customers listend in Mews client",
            columns: customers_cols
        };

        // Reservations
        var res_cols = [{
            id: "id",
            dataType: "string"
        },
        {
            id: "serviceId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "groupId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "number",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "channelManager",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "channelManagerGroupNumber",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "channelManagerNumber",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "channelNumber",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "state",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "origin",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "originDetail",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "purpose",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "createdUtc",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "updatedUtc",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "cancelledUtc",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "startUtc",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "releasedUtc",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "requestedCategoryId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "assignedResourceId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "assignedResourceLocked",
            dataType: tableau.dataTypeEnum.bool
        },
        {
            id: "businessSegmentId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "companyId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "travelAgencyId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "availabilityBlocked",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "rateId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "voucherId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "customerId",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "personCounts",
            dataType: tableau.dataTypeEnum.int
        }];

        var resTable = {
            id: "reservations",
            alias: "All reservations listend in Mews client",
            columns: res_cols
        };

        const connectionData = JSON.parse(tableau.connectionData);

        options = {
            method: 'post',
            url: connectionData.apiUrl + urlExtention + "services/getAll",
            data: {
                ClientToken: connectionData.clientToken,
                AccessToken: tableau.password,
                Client: connectionData.clientName
            }
        }

        axios(options).then(resp => {
            resp.data['Services'].forEach(i => {
                if (!serviceIds.includes(i['Id'])) serviceIds.push(i['Id'])
            })

            schemaCallback([prodTable, billsTable, outletTable, accountingTable, customersTable, resTable]);
        });
    };

    myConnector.getData = function(table, doneCallback) {
        const connectionData = JSON.parse(tableau.connectionData);
        const standardData = {
            ClientToken: connectionData.clientToken,
            AccessToken: tableau.password,
            Client: connectionData.clientName
        }
        const baseUrl = connectionData.apiUrl + urlExtention;
        let url;
        let tableData = []
        let data;
        let options;

        if (table.tableInfo.id == "products") {
            data = {
                ...standardData,
                ServiceIds: serviceIds
            }
            url = baseUrl + "products/getAll"
        }

        if (table.tableInfo.id == "bills") {
            data = {
                ...standardData,
                CreatedUtc: {
                    StartUtc: "2020-01-05T00:00:00Z",
                    EndUtc: "2020-01-10T00:00:00Z"
                }
            }
            url = baseUrl + "bills/getAll"
        }

        if (table.tableInfo.id == "outlet") {
            data = {
                ...standardData,
                ConsumedUtc: {
                    StartUtc: "2020-01-05T00:00:00Z",
                    EndUtc: "2020-01-10T00:00:00Z"
                }
            }
            url = baseUrl + "outletItems/getAll"
        }

        if (table.tableInfo.id == "accounting") {
            data = {
                ...standardData,
                ConsumedUtc: {
                    StartUtc: "2020-01-05T00:00:00Z",
                    EndUtc: "2020-01-10T00:00:00Z"
                }
            }
            url = baseUrl + "accountingItems/getAll"
        }

        if (table.tableInfo.id == "customers") {
            data = {
                ...standardData,
                CreatedUtc: {
                    StartUtc: "2020-01-05T00:00:00Z",
                    EndUtc: "2020-01-10T00:00:00Z"
                }
            }
            url = baseUrl + "customers/getAll"
        }

        if (table.tableInfo.id == "reservations") {
            data = {
                ...standardData,
                StartUtc: "2020-05-17T13:00:00Z",
                EndUtc: "2020-05-19T09:00:00Z"
            }
            url = baseUrl + "reservations/getAll"
        }

        options = {
            method: 'post',
            url,
            data
        }

        axios(options).then(resp => {
            let rows;
            // Products
            if (table.tableInfo.id == "products") {
                rows = resp.data['Products'];
                for (var i = 0, len = rows.length; i < len; i++) {
                    // create rows by maping data to cols
                    tableData.push({
                        "id": rows[i]['Id'],
                        "name": rows[i]['Name'] || "none",
                        "external_name": rows[i]['ExternalName'] || "none",
                        "description": rows[i]['Description'] || "none",
                        "serviceId": rows[i]['ServiceID'] || "none",
                        "categoryId": rows[i]['CategoryID'] || "none",
                        "isActive": rows[i]['IsActive'] || "none",
                        "shortName": rows[i]['Shortname'] || "none",
                        "charging": rows[i]['Charging'] || "none",
                        "posting": rows[i]['Posting'] || "none",
                        "price": rows[i]['Price']['Value'] || "none",
                        "currency": rows[i]['Price']['Currency'] || "none",
                        "net": rows[i]['Price']['Net'] || "none",
                        "tax": rows[i]['Price']['Tax'] || "none",
                        "taxRate": rows[i]['Price']['TaxRate'] || "none",
                        "netValue": rows[i]['Price']['NetValue'] || "none",
                        "grossValue": rows[i]['Price']['GrossValue'] || "none",
                        "taxValue": rows[i]['Price']['TaxValues'][0] ? rows[i]['Price']['TaxValues'].reduce((partialSum, i) => partialSum + i['Value'], 0) : "none",
                        "taxCode": rows[i]['Price']['TaxValues'][0] ? rows[i]['Price']['TaxValues'][0]['Code'] : "none"
                    });
                }
            }

            console.log(resp.data)

            // Bills
            if (table.tableInfo.id == "bills") {
                rows = resp.data['Bills'];
                for (var i = 0, len = rows.length; i < len; i++) {
                    // create rows by maping data to cols
                    tableData.push({
                        "id": rows[i]['Id'],
                        "customerId": rows[i]['CustomerId'] || "none",
                        "accountId": rows[i]['AccountId'] || "none",
                        "state": rows[i]['State'] || "none",
                        "type": rows[i]['Type'] || "none",
                        "createdUtc": rows[i]['CreatedUtc'] || "none",
                        "issuedUtc": rows[i]['IssuedUtc'] || "none",
                        "taxedUtc": rows[i]['TaxedUtc'] || "none",
                        "paidUtc": rows[i]['PaidUtc'] || "none",
                        "dueUtc": rows[i]['DueUtc'] || "none",
                    });
                }
            }

            // Outlet Items
            if (table.tableInfo.id == "outlet") {
                rows = resp.data['OutletItems'];
                for (var i = 0, len = rows.length; i < len; i++) {
                    // create rows by maping data to cols
                    tableData.push({
                        "id": rows[i]['Id'],
                        "billId": rows[i]['BillId'] || "none",
                        "accountingCategoryId": rows[i]['AccountingCategoryId'] || "none",
                        "consumedUtc": rows[i]['ConsumedUtc'] || "none",
                        "createdUtc": rows[i]['CreatedUtc'] || "none",
                        "name": rows[i]['Name'] || "none",
                        "unitCount": rows[i]['UnitCount'] || "none",
                        "grossValue": rows[i]['UnitAmount']['GrossValue'] || "none",
                        "netValue": rows[i]['UnitAmount']['NetValue'] || "none",
                        "currency": rows[i]['UnitAmount']['Currency'] || "none",
                        "notes": rows[i]['Notes'] || "none",
                    });
                }
            }

            // Accounting Items
            if (table.tableInfo.id == "accounting") {
                rows = resp.data['AccountingItems'];
                for (var i = 0, len = rows.length; i < len; i++) {
                    // create rows by maping data to cols
                    tableData.push({
                        "id": rows[i]['Id'],
                        "billId": rows[i]['BillId'] || "none",
                        "accountingCategoryId": rows[i]['AccountingCategoryId'] || "none",
                        "consumedUtc": rows[i]['ConsumptionUtc'] || "none",
                        "customerId": rows[i]['CustomerId'] || "none",
                        "orderId": rows[i]['OrderId'] || "none",
                        "grossValue": rows[i]['Amount']['GrossValue'] || "none",
                        "netValue": rows[i]['Amount']['NetValue'] || "none",
                        "tax": rows[i]['Amount']['Tax'] || "none",
                        "currency": rows[i]['Amount']['Currency'] || "none",
                        "taxValue": rows[i]['Amount']['TaxValues'][0] ? rows[i]['Amount']['TaxValues'].reduce((partialSum, i) => partialSum + i['Value'], 0) : "none",
                        "taxCode": rows[i]['Amount']['TaxValues'][0] ? rows[i]['Amount']['TaxValues'][0]['Code'] : 'none',
                        "type": rows[i]['Type'] || "none",
                        "closedUtc": rows[i]['ClosedUtc'] || "none",
                        "state": rows[i]['State'] || "none",
                        "productId": rows[i]['ProductId'] || "none",
                        "rebateItemId": rows[i]['RebateItemId'] || "none",
                    });
                }
            }

            // Customers
            if (table.tableInfo.id == "customers") {
                rows = resp.data['Customers'];
                for (var i = 0, len = rows.length; i < len; i++) {
                    // create rows by maping data to cols
                    tableData.push({
                        "id": rows[i]['Id'],
                        "number": rows[i]['Number'] || "none",
                        "title": rows[i]['Title'] || "none",
                        "sex": rows[i]['Sex'] || "none",
                        "firstName": rows[i]['FirstName'] || "none",
                        "lastName": rows[i]['LastName'] || "none",
                        "secondLastName": rows[i]['SecondLastName'] || "none",
                        "nationalityCode": rows[i]['NationalityCode'] || "none",
                        "languageCode": rows[i]['LanguageCode'] || "none",
                        "birthDate": rows[i]['BirthDate'] || "none",
                        "birthPlace": rows[i]['BirthPlace'] || "none",
                        "email": rows[i]['Email'] || "none",
                        "phone": rows[i]['Phone'] || "none",
                        "loyaltyCode": rows[i]['LoyaltyCode'] || "none",
                        "accountingCode": rows[i]['AccountingCode'] || "none",
                        "billingCode": rows[i]['BillingCode'] || "none",
                        "address": rows[i]['Address'] || "none",
                        "createdUtc": rows[i]['CreatedUtc'] || "none",
                        "updatedUtc": rows[i]['UpdatedUtc'] || "none",
                        "companyId": rows[i]['CompanyIe'] || "none",
                    });
                }
            }

            // Reservations
            if (table.tableInfo.id == "reservations") {
                rows = resp.data['Reservations'];
                for (var i = 0, len = rows.length; i < len; i++) {
                    // create rows by maping data to cols
                    tableData.push({
                        "id": rows[i]['Id'],
                        "serviceId": rows[i]['ServiceId'] || "none",
                        "groupId": rows[i]['GroupId'] || "none",
                        "number": rows[i]['Number'] || "none",
                        "channelManager": rows[i]['ChannelManager'] || "none",
                        "channelManagerGroupNumber": rows[i]['ChannelManagerGroupNumber'] || "none",
                        "channelManagerNumber": rows[i]['ChannelManagerNumber'] || "none",
                        "channelNumber": rows[i]['ChannelNumber'] || "none",
                        "state": rows[i]['State'] || "none",
                        "origin": rows[i]['Origin'] || "none",
                        "originDetail": rows[i]['OriginDetails'] || "none",
                        "purpose": rows[i]['Purpose'] || "none",
                        "createdUtc": rows[i]['CreatedUtc'] || "none",
                        "updatedUtc": rows[i]['UpdatedUtc'] || "none",
                        "cancelledUtc": rows[i]['CancelledUtc'] || "none",
                        "startUtc": rows[i]['StartUtc'] || "none",
                        "releasedUtc": rows[i]['ReleasedUtc'] || "none",
                        "requestedCategoryId": rows[i]['RequestedCategoryId'] || "none",
                        "assignedResourceId": rows[i]['AssignedResourceId'] || "none",
                        "assignedResourceLocked": rows[i]['AssignedSpaceLocked'] || "none",
                        "businessSegmentId": rows[i]['BusinessSegmentId'] || "none",
                        "companyId": rows[i]['CompanyId'] || "none",
                        "travelAgencyId": rows[i]['TravelAgencyId'] || "none",
                        "availabilityBlocked": rows[i]['AvailabilityBlockId'] || "none",
                        "rateId": rows[i]['RateId'] || "none",
                        "voucherId": rows[i]['VoucherId'] || "none",
                        "customerId": rows[i]['CustomerId'] || "none",
                        "personCounts": rows[i]['PersonCounts'][0] ? rows[i]['PersonCounts'].reduce((partialSum, i) => partialSum + i['Count'], 0) : "none",
                    });
                }
            }

            table.appendRows(tableData);
            doneCallback();
        })
        .catch(e => {
            console.log(e);
            doneCallback();
        })
    }

    tableau.registerConnector(myConnector);
    
    $(document).ready(function () {
        $("#submitButton").click(function () {
            tableau.connectionName = "Mews Feed";
            tableau.password = document.getElementById("access_token").value
            connectionData = {
                clientToken: document.getElementById("client_token").value,
                clientName: document.getElementById("client_name").value,
                apiUrl: document.getElementById("api_url").value
            }
            tableau.connectionData = JSON.stringify(connectionData)
            tableau.submit();
        });
    });
})();