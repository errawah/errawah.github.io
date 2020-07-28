"use strict";

//var Model = function(){
function Model() { //class
};
Model.prototype = Object.create(ParentModel.prototype);
Model.prototype.constructor = Model;

//Model.prototype.functionName = function(){} - sample


Model.prototype.showMembersListFrame = function (email, password) {
    var that = this;
    $("#id_memberlists").html("");
    this.showWaitingScreen('body');
    var cypher = {
        email: that.cypherText(email),
        password: that.cypherText(password),
    };
    var sql_statement = "select * from members where email='" + cypher.email + "' and password='" + cypher.password + "'";
    that.sqlExtract(sql_statement, function (response) {
        if (response.error) {
            that.hideWaitingScreen();
            $("#myModal").show({ show: true });
            $(".modal-title").text("Database Error");
            $(".modal-body").html(response.error);
        } else {
            $("#id_frame_signin").hide();
            $("#id_frame_register").hide();
            $("#id_frame_memberlists").show();
            $("#id_memberslist_title").html(email);

            if (that.isElementOverflowing(document.getElementById('id_memberslist_title'))) {
                $("#id_memberslist_title").wrapInner("<marquee scrollamount=2></marquee>");
                // console.log(  $("#id_memberslist_title").html() );
            }

            that.setSession([{
                "email": email,
                "password": password,
            }], function (response) {
                var members_list = new Array();
                var previous_members_list = new Array();
                var firsttime_load = true;
                that.no_of_members = 0;
                that.read_counter = 0;
                showClientList();

                async function showClientList() {
                    var sql_statement2 = "select * from members where email!='" + cypher.email + "'";
                    await that.sqlExtract(sql_statement2, function (response2) {
                        if (response2.error) {
                            that.no_of_members = 0;
                            console.log(response2);
                        } else {
                            that.no_of_members = response2.result.length - 1;
                            that.refresh_client_list = setInterval(async function () {
                                $.when(await updateMembersList(response2)).then(await updateScreen());
                            }, 2000);

                            async function updateMembersList(response2) {
                                for (var i = 0; i < response2.result.length; i++) {
                                    await updateNewMessageNo(i, response2);
                                }
                            };

                            async function updateNewMessageNo(record_no, response2) {
                                var sql_statement3 = "select count(*) as new_message_counter from chat where client_id='" + cypher.email + "' and user_id='" + response2.result[record_no]['email'] + "' and viewed=" + 0 + "";
                                await that.sqlExtract(sql_statement3, async function (response3) {
                                    if (response3.error) {
                                        that.read_counter = record_no;
                                        console.log(response3);
                                    } else {
                                        that.read_counter = record_no;
                                        if (response3.result[0]['new_message_counter'] > 0) {
                                            await members_list.push("<li id='id_listitem" + record_no + "' class='list-group-item'><span id='id_listitem_clients" + record_no + "'>" + that.decypherText(response2.result[record_no]['email']) + "</span> <span id='id_new_message_indicator" + record_no + "' class='new_message_indicator rounded-circle'>&nbsp;" + response3.result[0]['new_message_counter'] + "&nbsp;</span></li>");
                                        } else {
                                            await members_list.push("<li id='id_listitem" + record_no + "' class='list-group-item'><span id='id_listitem_clients" + record_no + "'>" + that.decypherText(response2.result[record_no]['email']) + "</span> </li>");
                                        }
                                        that.read_counter = record_no;
                                    }
                                });
                                that.read_counter = record_no;
                            };

                            async function updateScreen() {
                                console.log(that.read_counter + " = " + that.no_of_members);
                                if (that.read_counter == that.no_of_members && that.no_of_members > 0) {
                                    $.when(await sortList()).then(await makeChanges());
                                    async function sortList() {
                                        await members_list.sort();
                                    }
                                    async function makeChanges() {
                                        if (members_list.toString() != previous_members_list.toString()) {
                                            $.when(await updateList()).then(await playSound());
                                            async function updateList() {
                                                console.log("update list");
                                                that.hideWaitingScreen();
                                                await $("#id_memberlists").html(members_list);
                                            }
                                            async function playSound() {
                                                if (!firsttime_load) {
                                                    console.log("Play sound");
                                                    // await $("#id_audio_new_message_alert1").html("<audio id='id_ding' autoplay><source src='../audio/ding.wav' type='audio/wav'>Your browser does not support audio element</audio>");
                                                }
                                                firsttime_load = await false;
                                            }
                                        }
                                    }
                                    previous_members_list = await members_list.slice(0);
                                    members_list.length = await 0;
                                } else {
                                    console.log("Too early");
                                }
                            }
                        }
                    });
                }
            });
        }
    });

};




