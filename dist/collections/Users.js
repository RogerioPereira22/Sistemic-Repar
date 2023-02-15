"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
var isAdmin_1 = require("../access/isAdmin");
var isAdminOrSelf_1 = require("../access/isAdminOrSelf");
exports.Users = {
    slug: 'users',
    auth: true,
    admin: {
        useAsTitle: 'email',
    },
    access: {
        create: isAdmin_1.isAdmin,
        read: function () { return true; },
        update: isAdminOrSelf_1.isAdminOrSelf,
        delete: isAdminOrSelf_1.isAdminOrSelf,
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'firstName',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'lastName',
                    type: 'text',
                    required: true,
                },
            ]
        },
        {
            name: 'twitter',
            type: 'text',
        },
        {
            name: 'photo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'roles',
            type: 'select',
            hasMany: true,
            defaultValue: ['public'],
            required: true,
            access: {
                read: isAdminOrSelf_1.isAdminOrSelfFieldLevel,
                create: isAdmin_1.isAdminFieldLevel,
                update: isAdmin_1.isAdminFieldLevel,
            },
            options: [
                'admin',
                'public'
            ]
        }
    ],
};
