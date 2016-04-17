"use strict";

System.register(["jquery", "jquery-ui", "lodash", "../lib/constants"], function (_export, _context) {
    var $, _, APPLICATION_NAME;

    function usersController($mount, usersStore) {
        $mount.empty();

        var $parent = $("\n        <div class='users-controller'>\n            <h1>" + APPLICATION_NAME + "</h1>\n            <ul class='users-list'/>\n            <a href='#' class=\"add-user\">Add User</a>\n        </div>    \n    ").appendTo($mount);

        var $userList = $parent.find(".users-list"),
            $addUserButton = $parent.find(".add-user");

        function createUserRow(user) {
            var $row = $("<li />").text(user.toString()).click(function () {
                $("<div title='Confirm'>Are you sure?</div>").dialog({
                    modal: true,
                    buttons: {
                        Delete: function Delete() {
                            usersStore.remove(user.id);
                            $row.remove();
                            $(this).dialog("close");
                        },
                        Cancel: function Cancel() {
                            $(this).dialog("close");
                        }
                    }
                });
            }).appendTo($userList);

            return $row;
        }

        $addUserButton.click(function (e) {
            e.preventDefault();
            createUserRow(usersStore.add("Jane", "Doe"));
        }).appendTo($parent);

        _.each(usersStore.users, function (u) {
            return createUserRow(u);
        });

        return {
            destroy: function destroy() {
                $parent.remove();
            }
        };
    }

    _export("default", usersController);

    return {
        setters: [function (_jquery) {
            $ = _jquery.default;
        }, function (_jqueryUi) {}, function (_lodash) {
            _ = _lodash.default;
        }, function (_libConstants) {
            APPLICATION_NAME = _libConstants.APPLICATION_NAME;
        }],
        execute: function () {}
    };
});