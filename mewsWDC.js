(function () {
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        console.log(tableau.dataTypeEnum)
        var cols = [{
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
        }];

        var tableSchema = {
            id: "products",
            alias: "All products listend in Mews client",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    myConnector.getData = function(table, doneCallback) {
        let tableData = [];

        // tableData.push({
        //     "id": "hello world"
        // })
        // table.appendRows(tableData);
        // doneCallback();

        const data = {
            ClientToken: "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
            AccessToken: "C66EF7B239D24632943D115EDE9CB810-EA00F8FD8294692C940F6B5A8F9453D",
            Client: "Sample Client 1.0.0",
            ServiceIds: [
                "bd26d8db-86da-4f96-9efc-e5a4654a4a94"
            ]
        }
        const url = "http://localhost:8889/api.mews-demo.com/api/connector/v1/products/getAll";
        const options = {
            method: 'post',
            url,
            data
        }
        axios(options).then(resp => {
            let prod = resp.data['Products'];
            // Iterate over the JSON object
            for (var i = 0, len = prod.length; i < len; i++) {
                tableData.push({
                    "id": prod[i]['Id'],
                    "name": prod[i]['Name'] || "none",
                    "external_name": prod[i]['ExternalName'] || "none",
                    "description": prod[i]['Description'] || "none"
                });
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);
    
    $(document).ready(function () {
        $("#submitButton").click(function () {
            tableau.connectionName = "Mews Feed";
            tableau.submit();
        });
    });
})();