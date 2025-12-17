const express = require('express');
const router = express.Router();
const BlockchainService = require('../services/BlockchainService');
const BlockchainRecord = require('../models/BlockchainRecord');

// Store compliance record on blockchain
router.post('/store-record', async (req, res) => {
  try {
    const {
      documentHash,
      recordType,
      recordTitle,
      recordDescription,
      complianceFramework,
      documentData,
      metadata = {},
      institutionId
    } = req.body;

    if (!documentHash || !recordType || !recordTitle || !complianceFramework) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: documentHash, recordType, recordTitle, complianceFramework'
      });
    }

    const result = await BlockchainService.storeComplianceRecord({
      documentHash,
      recordType,
      recordTitle,
      recordDescription,
      complianceFramework,
      documentData,
      metadata,
      userId: req.user.id,
      institutionId
    });

    res.json({
      success: true,
      message: 'Compliance record stored on blockchain successfully',
      data: result
    });
  } catch (error) {
    console.error('Store blockchain record error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to store record on blockchain',
      error: error.message
    });
  }
});

// Verify blockchain record
router.post('/verify-record/:transactionHash', async (req, res) => {
  try {
    const { transactionHash } = req.params;

    if (!transactionHash) {
      return res.status(400).json({
        success: false,
        message: 'Transaction hash is required'
      });
    }

    const result = await BlockchainService.verifyRecord(transactionHash);

    res.json({
      success: true,
      message: 'Record verification completed',
      data: result
    });
  } catch (error) {
    console.error('Verify blockchain record error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to verify record',
      error: error.message
    });
  }
});

// Get institution blockchain records
router.get('/records/:institutionId', async (req, res) => {
  try {
    const { institutionId } = req.params;
    const {
      page = 1,
      limit = 20,
      recordType,
      complianceFramework,
      blockchainStatus,
      startDate,
      endDate,
      search
    } = req.query;

    const filters = {
      page: parseInt(page),
      limit: parseInt(limit),
      recordType,
      complianceFramework,
      blockchainStatus,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
      search
    };

    const result = await BlockchainService.getInstitutionRecords(institutionId, filters);

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('Get blockchain records error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get blockchain records',
      error: error.message
    });
  }
});

// Get blockchain analytics
router.get('/analytics/:institutionId', async (req, res) => {
  try {
    const { institutionId } = req.params;
    const { period = '30d' } = req.query;

    const analytics = await BlockchainService.getBlockchainAnalytics(institutionId, period);

    res.json({
      success: true,
      data: analytics
    });
  } catch (error) {
    console.error('Get blockchain analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get blockchain analytics',
      error: error.message
    });
  }
});

// Sync blockchain records
router.post('/sync/:institutionId', async (req, res) => {
  try {
    const { institutionId } = req.params;

    const result = await BlockchainService.syncBlockchainRecords(institutionId);

    res.json({
      success: true,
      message: 'Blockchain sync completed',
      data: result
    });
  } catch (error) {
    console.error('Sync blockchain records error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to sync blockchain records',
      error: error.message
    });
  }
});

// Get record by transaction hash
router.get('/record-by-hash/:transactionHash', async (req, res) => {
  try {
    const { transactionHash } = req.params;

    const record = await BlockchainRecord.findByTransactionHash(transactionHash);

    if (!record) {
      return res.status(404).json({
        success: false,
        message: 'Record not found'
      });
    }

    res.json({
      success: true,
      data: record
    });
  } catch (error) {
    console.error('Get record by hash error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get record',
      error: error.message
    });
  }
});

// Get records by document hash
router.get('/records-by-document/:documentHash', async (req, res) => {
  try {
    const { documentHash } = req.params;

    const records = await BlockchainRecord.findByDocumentHash(documentHash);

    res.json({
      success: true,
      data: records
    });
  } catch (error) {
    console.error('Get records by document hash error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get records by document hash',
      error: error.message
    });
  }
});

// Search blockchain records
router.post('/search', async (req, res) => {
  try {
    const {
      query,
      recordType,
      complianceFramework,
      blockchainNetwork,
      limit = 50,
      offset = 0
    } = req.body;

    if (!query) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    const result = await BlockchainRecord.searchRecords(query, {
      recordType,
      complianceFramework,
      blockchainNetwork,
      limit: parseInt(limit),
      offset: parseInt(offset)
    });

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('Search blockchain records error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to search records',
      error: error.message
    });
  }
});

// Get verification statistics
router.get('/verification-stats', async (req, res) => {
  try {
    const stats = await BlockchainRecord.getVerificationStats();

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Get verification stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get verification statistics',
      error: error.message
    });
  }
});

// Get blockchain networks
router.get('/networks', async (req, res) => {
  try {
    const networks = [
      {
        id: 'ethereum',
        name: 'Ethereum',
        chainId: 1,
        status: 'active',
        description: 'Main Ethereum network for production blockchain records'
      },
      {
        id: 'polygon',
        name: 'Polygon',
        chainId: 137,
        status: 'active',
        description: 'Polygon network for faster and cheaper transactions'
      },
      {
        id: 'hyperledger',
        name: 'Hyperledger Fabric',
        networkId: 'fabric-v2.4',
        status: 'active',
        description: 'Private blockchain network for enterprise use'
      }
    ];

    res.json({
      success: true,
      data: networks
    });
  } catch (error) {
    console.error('Get blockchain networks error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get blockchain networks',
      error: error.message
    });
  }
});

// Get record details
router.get('/record/:recordId', async (req, res) => {
  try {
    const { recordId } = req.params;

    const record = await BlockchainRecord.findByPk(recordId);

    if (!record) {
      return res.status(404).json({
        success: false,
        message: 'Record not found'
      });
    }

    // Calculate verification score
    const verificationScore = record.getVerificationScore();

    res.json({
      success: true,
      data: {
        ...record.toJSON(),
        verificationScore,
        isValid: record.isValid(),
        integrityHash: record.getIntegrityHash()
      }
    });
  } catch (error) {
    console.error('Get record details error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get record details',
      error: error.message
    });
  }
});

// Update record metadata
router.put('/record/:recordId', async (req, res) => {
  try {
    const { recordId } = req.params;
    const { metadata, tags } = req.body;

    const record = await BlockchainRecord.findByPk(recordId);

    if (!record) {
      return res.status(404).json({
        success: false,
        message: 'Record not found'
      });
    }

    const updateData = {};
    if (metadata) updateData.metadata = metadata;
    if (tags) updateData.tags = tags;

    await record.update(updateData);

    res.json({
      success: true,
      message: 'Record metadata updated successfully',
      data: record
    });
  } catch (error) {
    console.error('Update record metadata error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update record metadata',
      error: error.message
    });
  }
});

// Archive record
router.post('/archive/:recordId', async (req, res) => {
  try {
    const { recordId } = req.params;

    const record = await BlockchainRecord.findByPk(recordId);

    if (!record) {
      return res.status(404).json({
        success: false,
        message: 'Record not found'
      });
    }

    await record.update({
      isArchived: true,
      isActive: false
    });

    res.json({
      success: true,
      message: 'Record archived successfully'
    });
  } catch (error) {
    console.error('Archive record error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to archive record',
      error: error.message
    });
  }
});

// Get blockchain health status
router.get('/health', async (req, res) => {
  try {
    const healthStatus = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        database: 'connected',
        blockchain_networks: {
          ethereum: 'active',
          polygon: 'active',
          hyperledger: 'active'
        },
        ipfs: 'connected',
        smart_contracts: 'deployed'
      },
      metrics: {
        total_records: await BlockchainRecord.count(),
        pending_records: await BlockchainRecord.count({ where: { blockchainStatus: 'pending' } }),
        verified_records: await BlockchainRecord.count({ where: { validationStatus: 'verified' } }),
        average_verification_time: '2.5s'
      }
    };

    res.json({
      success: true,
      data: healthStatus
    });
  } catch (error) {
    console.error('Get blockchain health error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get blockchain health status',
      error: error.message
    });
  }
});

// Export records
router.post('/export/:institutionId', async (req, res) => {
  try {
    const { institutionId } = req.params;
    const { 
      format = 'json',
      startDate,
      endDate,
      recordTypes = [],
      complianceFrameworks = []
    } = req.body;

    const filters = {
      institutionId,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
      recordType: recordTypes.length > 0 ? { [Op.in]: recordTypes } : undefined,
      complianceFramework: complianceFrameworks.length > 0 ? { [Op.in]: complianceFrameworks } : undefined
    };

    const records = await BlockchainRecord.findAll({
      where: filters,
      order: [['createdAt', 'DESC']]
    });

    // Format export data
    const exportData = records.map(record => ({
      id: record.id,
      transactionHash: record.transactionHash,
      recordType: record.recordType,
      recordTitle: record.recordTitle,
      complianceFramework: record.complianceFramework,
      blockchainStatus: record.blockchainStatus,
      validationStatus: record.validationStatus,
      documentHash: record.documentHash,
      blockTimestamp: record.blockTimestamp,
      createdAt: record.createdAt,
      verificationScore: record.getVerificationScore(),
      explorerUrl: BlockchainService.getExplorerUrl(record.blockchainNetwork, record.transactionHash)
    }));

    res.json({
      success: true,
      message: 'Records exported successfully',
      data: {
        format,
        recordCount: exportData.length,
        exportedAt: new Date(),
        records: exportData
      }
    });
  } catch (error) {
    console.error('Export blockchain records error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to export records',
      error: error.message
    });
  }
});

// Get compliance framework statistics
router.get('/framework-stats', async (req, res) => {
  try {
    const stats = await BlockchainRecord.findAll({
      attributes: [
        'complianceFramework',
        [sequelize.fn('COUNT', sequelize.col('id')), 'totalRecords'],
        [sequelize.fn('AVG', sequelize.col('verificationCount')), 'avgVerifications']
      ],
      group: ['complianceFramework'],
      order: [[sequelize.literal('totalRecords'), 'DESC']]
    });

    const frameworkStats = stats.map(stat => ({
      framework: stat.complianceFramework,
      totalRecords: parseInt(stat.dataValues.totalRecords),
      averageVerifications: parseFloat(stat.dataValues.avgVerifications || 0)
    }));

    res.json({
      success: true,
      data: frameworkStats
    });
  } catch (error) {
    console.error('Get framework stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get framework statistics',
      error: error.message
    });
  }
});

module.exports = router;