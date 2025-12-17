const { sequelize } = require('../config/database');

// Import all models
const User = require('./User');
const Institution = require('./Institution');
const Faculty = require('./Faculty');
const Document = require('./Document');
const Alert = require('./Alert');
const Approval = require('./Approval');
const ComplianceDeadline = require('./ComplianceDeadline');
const RiskAssessment = require('./RiskAssessment');
const AlertNotification = require('./AlertNotification');

// Define model associations
const defineAssociations = () => {
  // User-Institution Association
  User.belongsTo(Institution, { foreignKey: 'institutionId', as: 'institution' });
  Institution.hasMany(User, { foreignKey: 'institutionId', as: 'users' });

  // Institution-Faculty Association
  Institution.hasMany(Faculty, { foreignKey: 'institutionId', as: 'faculty' });
  Faculty.belongsTo(Institution, { foreignKey: 'institutionId', as: 'institution' });

  // Faculty-Document Association
  Faculty.hasMany(Document, { foreignKey: 'facultyId', as: 'documents' });
  Document.belongsTo(Faculty, { foreignKey: 'facultyId', as: 'faculty' });

  // Institution-Document Association
  Institution.hasMany(Document, { foreignKey: 'institutionId', as: 'documents' });
  Document.belongsTo(Institution, { foreignKey: 'institutionId', as: 'institution' });

  // User-Document Association (for documents uploaded by users)
  User.hasMany(Document, { foreignKey: 'uploadedBy', as: 'uploadedDocuments' });
  Document.belongsTo(User, { foreignKey: 'uploadedBy', as: 'uploader' });

  // Alert Associations
  User.hasMany(Alert, { foreignKey: 'userId', as: 'alerts' });
  Alert.belongsTo(User, { foreignKey: 'userId', as: 'user' });

  Institution.hasMany(Alert, { foreignKey: 'institutionId', as: 'alerts' });
  Alert.belongsTo(Institution, { foreignKey: 'institutionId', as: 'institution' });

  // Approval Associations
  User.hasMany(Approval, { foreignKey: 'approverId', as: 'approvalsGiven' });
  Approval.belongsTo(User, { foreignKey: 'approverId', as: 'approver' });

  User.hasMany(Approval, { foreignKey: 'requesterId', as: 'approvalsRequested' });
  Approval.belongsTo(User, { foreignKey: 'requesterId', as: 'requester' });

  Document.hasMany(Approval, { foreignKey: 'documentId', as: 'approvals' });
  Approval.belongsTo(Document, { foreignKey: 'documentId', as: 'document' });

  // Phase 1: ComplianceDeadline Associations
  Institution.hasMany(ComplianceDeadline, { foreignKey: 'institutionId', as: 'complianceDeadlines' });
  ComplianceDeadline.belongsTo(Institution, { foreignKey: 'institutionId', as: 'institution' });

  // Parent-child relationship for sub-deadlines
  ComplianceDeadline.hasMany(ComplianceDeadline, { foreignKey: 'parentDeadlineId', as: 'subDeadlines' });
  ComplianceDeadline.belongsTo(ComplianceDeadline, { foreignKey: 'parentDeadlineId', as: 'parentDeadline' });

  // Phase 1: RiskAssessment Associations
  ComplianceDeadline.hasMany(RiskAssessment, { foreignKey: 'deadlineId', as: 'riskAssessments' });
  RiskAssessment.belongsTo(ComplianceDeadline, { foreignKey: 'deadlineId', as: 'deadline' });

  Institution.hasMany(RiskAssessment, { foreignKey: 'institutionId', as: 'riskAssessments' });
  RiskAssessment.belongsTo(Institution, { foreignKey: 'institutionId', as: 'institution' });

  // Self-referencing relationship for superseded assessments
  RiskAssessment.hasOne(RiskAssessment, { foreignKey: 'supersededBy', as: 'supersedes' });
  RiskAssessment.belongsTo(RiskAssessment, { foreignKey: 'supersededBy', as: 'supersededBy' });

  // Phase 1: AlertNotification Associations
  ComplianceDeadline.hasMany(AlertNotification, { foreignKey: 'deadlineId', as: 'notifications' });
  AlertNotification.belongsTo(ComplianceDeadline, { foreignKey: 'deadlineId', as: 'deadline' });

  RiskAssessment.hasMany(AlertNotification, { foreignKey: 'riskAssessmentId', as: 'notifications' });
  AlertNotification.belongsTo(RiskAssessment, { foreignKey: 'riskAssessmentId', as: 'riskAssessment' });

  Institution.hasMany(AlertNotification, { foreignKey: 'institutionId', as: 'notifications' });
  AlertNotification.belongsTo(Institution, { foreignKey: 'institutionId', as: 'institution' });

  // User-Recipient Association (for notifications sent to specific users)
  User.hasMany(AlertNotification, { foreignKey: 'recipientId', as: 'receivedNotifications' });
  AlertNotification.belongsTo(User, { foreignKey: 'recipientId', as: 'recipient' });
};

// Export all models
const models = {
  User,
  Institution,
  Faculty,
  Document,
  Alert,
  Approval,
  ComplianceDeadline,
  RiskAssessment,
  AlertNotification
};

// Initialize associations
defineAssociations();

module.exports = {
  sequelize,
  ...models
};