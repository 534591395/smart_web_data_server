/**
 * 
 */
module.exports = app => {
    const { STRING, INTEGER, DATE, CHAR, DECIMAL, DATEONLY, DATE, TEXT } = app.Sequelize;
  
    const User = app.model.define('user', {
        uid: {
            type: INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        username: {
            type: STRING(30),
            allowNull: false,
            unique: true
        },
        nickname: {
            type: STRING(30),
            allowNull: true
        },
        userType: {
            type: CHAR(1),
            allowNull: false
        },
        IDType: {
                type: CHAR(1),
                allowNull: true,
                defaultValue: '0'
        },
        IDNO: {
            type: STRING(30),
            allowNull: true,
            unique: true
        },
        cell: {
            type: STRING(30),
            allowNull: true,
            unique: true
        },
        emall: {
            type: STRING(100),
            allowNull: true
        },
        cell2: {
            type: STRING(100),
            allowNull: true
        },
        tel: {
            type: STRING(100),
            allowNull: true
        },
        fax: {
            type: STRING(30),
            allowNull: true
        },
        qq: {
            type: STRING(30),
            allowNull: true
        },
        weChat: {
            type: STRING(30),
            allowNull: true
        },
        nationality: {
            type: INTEGER(11),
            allowNull: true
        },
        religion: {
            type: INTEGER(11),
            allowNull: true
        },
        polityFace: {
            type: INTEGER(11),
            allowNull: true
        },
        birthdate: {
            type: DATEONLY,
            allowNull: true
        },
        birthPlace: {
            type: STRING(30),
            allowNull: true
        },
        marriage: {
            type: CHAR(1),
            allowNull: false,
            defaultValue: '0'
        },
        blood: {
            type: CHAR(1),
            allowNull: false,
            defaultValue: '0'
        },
        gender: {
            type: CHAR(1),
            allowNull: false,
            defaultValue: '0'
        },
        height: {
            type: DECIMAL,
            allowNull: true
        },
        weight: {
            type: DECIMAL,
            allowNull: true
        },
        education: {
            type: CHAR(1),
            allowNull: false,
            defaultValue: '0'
        },
        gradSchool: {
            type: STRING(100),
            allowNull: true
        },
        major: {
            type: STRING(100),
            allowNull: true
        },
        graduationDate: {
            type: DATEONLY,
            allowNull: true
        },
        occupation: {
            type: STRING(30),
            allowNull: true
        },
        jobTitle: {
            type: STRING(100),
            allowNull: true
        },
        regionID: {
            type: INTEGER(11),
            allowNull: true
        },
        provinceID: {
            type: INTEGER(11),
            allowNull: true
        },
        cityID: {
            type: INTEGER(11),
            allowNull: true
        },
        districtID: {
            type: INTEGER(11),
            allowNull: true
        },
        town: {
            type: STRING(100),
            allowNull: true
        },
        addr1: {
            type: STRING(100),
            allowNull: true
        },
        addr2: {
            type: STRING(100),
            allowNull: true
        },
        addr3: {
            type: STRING(100),
            allowNull: true
        },
        zip: {
            type: STRING(30),
            allowNull: true
        },
        URGLinkman: {
            type: STRING(30),
            allowNull: true
        },
        URGTel: {
            type: STRING(30),
            allowNull: true
        },
        secQuestion1: {
            type: STRING(100),
            allowNull: true
        },
        secQuestion2: {
            type: STRING(100),
            allowNull: true
        },
        secQuestion3: {
            type: STRING(100),
            allowNull: true
        },
        secAnswer1: {
            type: STRING(100),
            allowNull: true
        },
        secAnswer2: {
            type: STRING(100),
            allowNull: true
        },
        secAnswer3: {
            type: STRING(100),
            allowNull: true
        },
        secPassword: {
            type: STRING(30),
            allowNull: true
        },
        status: {
            type: CHAR(1),
            allowNull: false,
            defaultValue: '0'
        },
        validStatus: {
            type: CHAR(1),
            allowNull: false,
            defaultValue: '0'
        },
        note: {
            type: TEXT,
            allowNull: true
        },
        createTime: {
            type: DATE,
            allowNull: true,
            defaultValue: app.Sequelize.literal('CURRENT_TIMESTAMP')
        },
        modifyTime: {
            type: DATE,
            allowNull: true,
            defaultValue: app.Sequelize.literal('CURRENT_TIMESTAMP')
        },
        closeDate: {
            type: DATEONLY,
            allowNull: true
        },
        loginNum: {
            type: INTEGER(11),
            allowNull: true
        },
        lastLoginTime: {
            type: DATE,
            allowNull: true
        }
    });
  
    return User;
};