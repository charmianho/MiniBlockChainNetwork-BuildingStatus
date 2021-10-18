// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract Building{

    enum BuildingStatus {Pending, Shipped, Delivered, BuildingInProgress, Built}

    BuildingStatus private status;
    event LogNewAlert(string Description);

    constructor() public{
        status = BuildingStatus.Pending;
    }

    function Shipped() public{
        status = BuildingStatus.Shipped;
        emit LogNewAlert("The materials has been shipped");
    }

    function Delivered() public{
        status = BuildingStatus.Delivered;
        emit LogNewAlert("The materials has been delivered");
    }

    function BuildingInProgress() public{
        status = BuildingStatus.BuildingInProgress;
        emit LogNewAlert("Building In Progress");
    }

    function Built() public{
        status = BuildingStatus.Built;
        emit LogNewAlert("This part has built");
    }

    function getStatus(BuildingStatus _status) internal pure returns(string memory){
        if(BuildingStatus.Pending == _status) return "Pending";
        if(BuildingStatus.Shipped == _status) return "Shipped";
        if(BuildingStatus.Delivered == _status) return "Delivered";
        if(BuildingStatus.BuildingInProgress == _status) return "BuildingInProgress";
        if(BuildingStatus.Built == _status) return "Built";
    }

    function Status() public view returns (string memory){
        BuildingStatus _status = status;
        return getStatus(_status);
    } 
}