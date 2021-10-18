const BuildingStatus = artifacts.require("Building");
contract('Building',() => {
    it("should return the status Pending", async()=> {
        //Instance of our deployed contract
        const instance = await BuildingStatus.deployed();
        //Checking the initial status in our contact
        const status = await instance.Status();
        //Checking if the status is intially Pending as set in the constructer
        assert.equal(status, "Pending"); 
    });
    it("should return the status Shipped", async()=> {
        //Instance of our deployed contract
        const instance = await BuildingStatus.deployed();

        //Calling the Shipped() function
        await instance.Shipped();

        //Checking the initial status in our contact
        const status = await instance.Status();

        //Checking if the status is is Shipped
        assert.equal(status, "Shipped"); 
    });
    it("should return the status Delivered", async()=>{
        //Instance of our deployed contract
        const instance = await BuildingStatus.deployed();

        //Calling the Delivered() function
        await instance.Delivered();

        //Checking the initial status in our contact
        const status = await instance.Status();

        //Checking if the status is is Shipped
        assert.equal(status, "Delivered"); 
    });

    it("should return the status BuildingInProgress", async()=>{
        //Instance of our deployed contract
        const instance = await BuildingStatus.deployed();

        //Calling the Delivered() function
        await instance.BuildingInProgress();

        //Checking the initial status in our contact
        const status = await instance.Status();

        //Checking if the status is is Shipped
        assert.equal(status, "BuildingInProgress"); 
    });

    it("should return the status Built", async()=>{
        //Instance of our deployed contract
        const instance = await BuildingStatus.deployed();

        //Calling the Delivered() function
        await instance.Built();

        //Checking the initial status in our contact
        const status = await instance.Status();

        //Checking if the status is is Shipped
        assert.equal(status, "Built"); 
    });
});