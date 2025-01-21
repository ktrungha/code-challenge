import { DataTypes } from 'sequelize'
import { sequelize } from '../common/db'

export const Person = sequelize.define(
    'Person',
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        givenName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        familyName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nickName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        tableName: 'person',
        timestamps: false,
        underscored: true,
    }
)
