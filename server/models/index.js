const { sequelize } = require('../config/database');

// Import all models
const User = require('./User');
const Institution = require('./Institution');
const Faculty = require('./Faculty');
const Document = require('./Document');
const Alert = require('./Alert');
const Approval = require('./Approval');

// Phase 1 Models
const ComplianceDeadline = require('./ComplianceDeadline');
const RiskAssessment = require('./RiskAssessment');
const AlertNotification = require('./AlertNotification');

// Phase 2 Models
const GovernmentPortal = require('./GovernmentPortal');
const ComplianceVerification = require('./ComplianceVerification');
const AIDocument = require('./AIDocument');
const ExecutiveMetric = require('./ExecutiveMetric');

// Phase 3 Models
const BlockchainRecord = require('./BlockchainRecord');
const IoTDevice = require('./IoTDevice');
const IoTSensorData = require('./IoTSensorData');
const AIAssistant = require('./AIAssistant');
const AIChatMessage = require('./AIChatMessage');

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

  // Phase 2: GovernmentPortal Associations
  // GovernmentPortal doesn't have foreign keys as it's a configuration entity
  // but we can add it to the models object for completeness

  // Phase 2: ComplianceVerification Associations
  Institution.hasMany(ComplianceVerification, { foreignKey: 'institutionId', as: 'complianceVerifications' });
  ComplianceVerification.belongsTo(Institution, { foreignKey: 'institutionId', as: 'institution' });

  GovernmentPortal.hasMany(ComplianceVerification, { foreignKey: 'portalId', as: 'verifications' });
  ComplianceVerification.belongsTo(GovernmentPortal, { foreignKey: 'portalId', as: 'portal' });

  // Phase 2: AIDocument Associations
  Institution.hasMany(AIDocument, { foreignKey: 'institutionId', as: 'aiDocuments' });
  AIDocument.belongsTo(Institution, { foreignKey: 'institutionId', as: 'institution' });

  User.hasMany(AIDocument, { foreignKey: 'uploadedBy', as: 'uploadedDocuments' });
  AIDocument.belongsTo(User, { foreignKey: 'uploadedBy', as: 'uploader' });

  Faculty.hasMany(AIDocument, { foreignKey: 'facultyId', as: 'aiDocuments' });
  AIDocument.belongsTo(Faculty, { foreignKey: 'facultyId', as: 'faculty' });

  User.hasMany(AIDocument, { foreignKey: 'validatedBy', as: 'validatedDocuments' });
  AIDocument.belongsTo(User, { foreignKey: 'validatedBy', as: 'validator' });

  ComplianceVerification.hasMany(AIDocument, { foreignKey: 'complianceVerificationId', as: 'supportingDocuments' });
  AIDocument.belongsTo(ComplianceVerification, { foreignKey: 'complianceVerificationId', as: 'complianceVerification' });

  // Self-referencing relationship for document versions
  AIDocument.hasMany(AIDocument, { foreignKey: 'parentDocumentId', as: 'documentVersions' });
  AIDocument.belongsTo(AIDocument, { foreignKey: 'parentDocumentId', as: 'parentDocument' });

  // Phase 2: ExecutiveMetric Associations
  Institution.hasMany(ExecutiveMetric, { foreignKey: 'institutionId', as: 'executiveMetrics' });
  ExecutiveMetric.belongsTo(Institution, { foreignKey: 'institutionId', as: 'institution' });

  // Phase 3: BlockchainRecord Associations
  Institution.hasMany(BlockchainRecord, { foreignKey: 'institutionId', as: 'blockchainRecords' });
  BlockchainRecord.belongsTo(Institution, { foreignKey: 'institutionId', as: 'institution' });

  User.hasMany(BlockchainRecord, { foreignKey: 'createdBy', as: 'createdBlockchainRecords' });
  BlockchainRecord.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' });

  // Self-referencing relationship for blockchain record versions
  BlockchainRecord.hasMany(BlockchainRecord, { foreignKey: 'parentRecordId', as: 'recordVersions' });
  BlockchainRecord.belongsTo(BlockchainRecord, { foreignKey: 'parentRecordId', as: 'parentRecord' });

  // Phase 3: IoTDevice Associations
  Institution.hasMany(IoTDevice, { foreignKey: 'institutionId', as: 'iotDevices' });
  IoTDevice.belongsTo(Institution, { foreignKey: 'institutionId', as: 'institution' });

  User.hasMany(IoTDevice, { foreignKey: 'managedBy', as: 'managedDevices' });
  IoTDevice.belongsTo(User, { foreignKey: 'managedBy', as: 'manager' });

  User.hasMany(IoTDevice, { foreignKey: 'ownedBy', as: 'ownedDevices' });
  IoTDevice.belongsTo(User, { foreignKey: 'ownedBy', as: 'owner' });

  // Location association (using Institution as location proxy for now)
  Institution.hasMany(IoTDevice, { foreignKey: 'locationId', as: 'locationDevices' });
  IoTDevice.belongsTo(Institution, { foreignKey: 'locationId', as: 'location' });

  // Phase 3: IoTSensorData Associations
  IoTDevice.hasMany(IoTSensorData, { foreignKey: 'deviceId', as: 'sensorData' });
  IoTSensorData.belongsTo(IoTDevice, { foreignKey: 'deviceId', as: 'device' });

  Institution.hasMany(IoTSensorData, { foreignKey: 'institutionId', as: 'allSensorData' });
  IoTSensorData.belongsTo(Institution, { foreignKey: 'institutionId', as: 'institution' });

  // Phase 3: AIAssistant Associations
  User.hasMany(AIAssistant, { foreignKey: 'userId', as: 'aiSessions' });
  AIAssistant.belongsTo(User, { foreignKey: 'userId', as: 'user' });

  Institution.hasMany(AIAssistant, { foreignKey: 'institutionId', as: 'aiSessions' });
  AIAssistant.belongsTo(Institution, { foreignKey: 'institutionId', as: 'institution' });

  // Self-referencing relationship for conversation threading
  AIChatMessage.hasMany(AIChatMessage, { foreignKey: 'parentMessageId', as: 'childMessages' });
  AIChatMessage.belongsTo(AIChatMessage, { foreignKey: 'parentMessageId', as: 'parentMessage' });

  // Phase 3: AIChatMessage Associations
  AIAssistant.hasMany(AIChatMessage, { foreignKey: 'sessionId', as: 'messages' });
  AIChatMessage.belongsTo(AIAssistant, { foreignKey: 'sessionId', as: 'session' });

  User.hasMany(AIChatMessage, { foreignKey: 'userId', as: 'userMessages' });
  AIChatMessage.belongsTo(User, { foreignKey: 'userId', as: 'user' });

  // Cross-model associations for Phase 3
  // AIAssistant sessions can reference compliance documents
  AIDocument.hasMany(AIChatMessage, { foreignKey: 'referencedDocumentId', as: 'referencedInMessages' });
  AIChatMessage.belongsTo(AIDocument, { foreignKey: 'referencedDocumentId', as: 'referencedDocument' });

  // IoT data can trigger blockchain records for compliance verification
  IoTSensorData.hasMany(BlockchainRecord, { foreignKey: 'iotDataId', as: 'blockchainRecords' });
  BlockchainRecord.belongsTo(IoTSensorData, { foreignKey: 'iotDataId', as: 'iotData' });

  // AI assistant can generate compliance insights from IoT data
  IoTDevice.hasMany(AIAssistant, { foreignKey: 'sourceDeviceId', as: 'generatedSessions' });
  AIAssistant.belongsTo(IoTDevice, { foreignKey: 'sourceDeviceId', as: 'sourceDevice' });
};

// Export all models
const models = {
  User,
  Institution,
  Faculty,
  Document,
  Alert,
  Approval,
  // Phase 1 Models
  ComplianceDeadline,
  RiskAssessment,
  AlertNotification,
  // Phase 2 Models
  GovernmentPortal,
  ComplianceVerification,
  AIDocument,
  ExecutiveMetric,
  // Phase 3 Models
  BlockchainRecord,
  IoTDevice,
  IoTSensorData,
  AIAssistant,
  AIChatMessage
};

// Initialize associations
defineAssociations();

module.exports = {
  sequelize,
  ...models
};